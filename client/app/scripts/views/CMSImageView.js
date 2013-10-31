/*global App*/
/* Backbone View */
App.View.CMSImageView = App.View.BaseView.extend({

  template: App.Templates.cmsimages,
  model: App.models.cmsImagesPage,

  initialize: function(){
    var self = this;
    this.listenTo(this.model, 'change', function () {console.log('list change - calling render');self.render();});
  }

});