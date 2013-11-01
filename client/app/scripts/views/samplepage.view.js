/*global App*/
/* Backbone View */
App.View.SamplePageView = App.View.BaseView.extend({

  template: App.Templates.samplepage,
  model: App.models.samplePage,

  initialize: function(){
    var self = this;
    this.listenTo(this.model, 'change', function () {console.log('model changed - calling render');self.render();});
  }

});