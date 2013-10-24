/*global App*/
/* Backbone View */
App.View.CMSAddressesView = App.View.BaseView.extend({

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
    this.navbar = new App.View.NavbarView({title: "Title", titleWidth: "A million"});
    this.$el.empty();
    this.$el.append(this.navbar.render());

    var tpl = App.Templates.cmsaddresses({addresses: this.collection.toJSON()});
    this.$el.append(tpl);
    return this.$el;
  },

  changed: function(e) {
    var selected = $(e.currentTarget).val();
    var model = this.collection.findWhere({name: selected});
    this.$el.find('#yolks').empty().append(model.get('address'));
  }

});