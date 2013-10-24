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
    this.listenTo(this.model, 'change', this.render);
  },

  cloudCall: function(){
    var self = this;

    $fh.cms.updateAll(function () {
      console.log('Successful mCMS refresh');
      $fh.cms.getField({path:"page1.name"}, function(page1Name) {
        console.log('Retrieved field value: ', page1Name);
        $fh.cms.getField({path:"page1.address"}, function(page1Address) {
          console.log('Retrieved field value: ', page1Address);
          self.gotData({name: page1Name, address: page1Address});
          console.log('Retrieved field value: ', page1Address);
          App.models.cmsListPage.set("paragraphs", [{paragraph:"one"}, {paragraph:"two"}, {paragraph:"three"}]);
          // $fh.cms.getList({path: 'page2.list'}, function (listValue) {
          //   App.models.cmsListPage.set("paragraphs", listValue);
          // }, function (err) {console.log('Error retrieving list: ', err);});
        }, function(err) {
          console.log('error retrieving field value, err: ', err);
        });
      }, function(err) {
        console.log('error retrieving field value, err: ', err);
      });
    }, function(err) {
      console.log('Failed mCMS refresh');
      self.dataError('Failed mCMS refresh', err);
    });

  },

  gotData: function(res){
    //this.$el.find('.hidden').removeClass('hidden');
    //this.$el.find('.response_content').removeClass('alert-error').addClass('alert-success').html('Response: ' + res.text);
    //this.$el.find('.extra_response').removeClass('hidden');
    this.$el.find('.appdata_name').html('' + res.name);
    this.$el.find('.appdata_address').html('' + res.address);
  }

  // ,

  // emptyFirst: function() {
  //   this.$el.empty();
  //   this.render();
  // },

  // close: function(){
  //   this.remove();
  //   this.unbind();
  //   this.model.unbind("change", this.modelChanged);
  // }

});