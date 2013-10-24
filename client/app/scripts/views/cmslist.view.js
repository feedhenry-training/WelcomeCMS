/*global App*/
/* Backbone View */
App.View.CMSListView = App.View.BaseView.extend({

  template: App.Templates.cmslist,
  model: App.models.cmsListPage,

  initialize: function(){
    var self = this;
    this.listenTo(this.model, 'change', function () {console.log('address change - calling render');self.render();});
  }

});