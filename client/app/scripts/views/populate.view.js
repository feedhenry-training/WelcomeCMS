/*global App, _, $fh, doCmsRefresh*/
/* Backbone View */
App.View.PopulateView = App.View.BaseView.extend({

  template: App.Templates.populate,
  model: App.models.populatePage,

  events: {
    'click .populate-action-button': 'populateCall'
  },

  initialize: function(){
    _.bindAll(this, 'gotData', 'dataError');
  },

  populateCall: function(){
    var self = this;
    $fh.act({act: 'populate', req: {}}, function(res){
      self.gotData(res);
      doCmsRefresh();
    }, function(msg, err){
      self.dataError(msg, err);
    });
  },

  gotData: function(res){
    this.$el.find('.hidden').removeClass('hidden');
    this.$el.find('.response_content').removeClass('alert-error').addClass('alert-success').html('Response: ' + res.status);
    //this.$el.find('.extra_response').removeClass('hidden').html('In got data');
  }

});