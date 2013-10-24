/*global App, Backbone*/
/* Backbone View */
App.View.CMSAddressesView = Backbone.View.extend({

  //template: App.Templates.cmslist,
  //model: App.models.cmsListPage,

  events: {
    'change select': 'changed'
  },

  initialize: function(){
    this.collection = App.collections.addresses;
    this.listenTo(this.collection, 'change', this.render);
  },

  render: function() {
    this.navbar = new App.View.NavbarView({title: "CMS Addresses"});
    this.$el.empty();
    this.$el.append(this.navbar.render());

    var tpl = App.Templates.cmsaddresses({addresses: this.collection.toJSON()});
    console.log('tpl: ', tpl);
    this.$el.append(tpl);
    return this.$el;
  },

  changed: function(e) {
    var selected = $(e.currentTarget).val();
    var model = this.collection.findWhere({name: selected});
    this.$el.find('#address').empty().append(model.get('address'));
    this.$el.find('#name').empty().append(model.get('name'));
  },

  dataError: function(msg){
    this.$el.find('.response_content').removeClass('alert-success').addClass('alert').addClass('alert-danger').html('Ops, something went wrong (' + msg+ '). Please try again later.');
  },

  dataReset: function(){
    this.$el.find('.response_content').removeClass('alert-success').removeClass('alert').removeClass('alert-danger').html('');
  }

});