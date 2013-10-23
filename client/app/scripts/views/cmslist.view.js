/*global App*/
/* Backbone View */
App.View.CMSListView = App.View.BaseView.extend({

  template: App.Templates.cmslist,
  model: App.models.cmsListPage,

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  }

});