/*global App, _, $fh*/
/* Backbone View */
App.View.CloudcallView = App.View.BaseView.extend({

  template: App.Templates.cloudcall,
  model: App.models.cloudcallPage,

  events: {
    'click .cms-refresh-button': 'cloudCall'
  },

  initialize: function(){
    _.bindAll(this, 'gotData', 'dataError');
  },

  cloudCall: function(){
    var self = this;

    $fh.cms.updateAll(function () {
      console.log('Successful mCMS refresh');
      $fh.cms.getField({path:"anewsection28.section1_field33"}, function(value) {
        self.gotData({text:value});
        //self.model.cmsFieldData = value;
        console.log('Retrieved field value: ', value);
      }, function(err) {
        console.log('error retrieving field value, err: ', err);
      });
    }, function(err) {
      console.log('Failed mCMS refresh');
      self.dataError('Failed mCMS refresh', err);
    });

  },

  gotData: function(res){
    this.$el.find('.hidden').removeClass('hidden');
    this.$el.find('.response_content').removeClass('alert-error').addClass('alert-success').html('Response: ' + res.text);
    this.$el.find('.extra_response').removeClass('hidden');
  }

});