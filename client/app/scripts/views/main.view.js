/*global App, Backbone, _, Effeckt, $fh*/
/* Backbone View */
App.View.MainView = Backbone.View.extend({

  events: function(){
    var eventName  = 'click';
    var hash = {};
    hash[eventName + ' .cloud-action'] = 'cloudActionPage';
    hash[eventName + ' .cms-list'] = 'cmsListPage';
/*    hash[eventName + ' .data-browser'] = 'dataBrowserPage';
    hash[eventName + ' .nodejs-page'] = 'nodePage';
    hash[eventName + ' .weather-sample'] = 'weatherPage';
    hash[eventName + ' .stats-analytics'] = 'analyticsPage'; */
    hash[eventName + ' .btn.refresh'] = 'cmsRefresh';
    hash[eventName + ' .btn.back'] = 'backToIntro';
    return hash;
  },

  initialize: function(options){
    this.mainViewContainer = options.mainContainer;
    this.pageViewContainer = options.pageContainer;
    _.bindAll(this, 'cloudActionPage', 'cmsListPage', /* 'dataBrowserPage', 'nodePage', 'cloudIntegrationPage', 'weatherPage', 'analyticsPage', */ 'backToIntro');
  },

  render: function(){
    var introView = new App.View.IntroView();
    this.introView = introView.render();
    this.mainViewContainer.html(this.introView);
  },

  cloudActionPage: function(){
    if(!this.cloudCallView){
      var cloudCallView = new App.View.CloudcallView();
      this.cloudCallView = cloudCallView.render();
    }
    this.showPage(this.cloudCallView);
  },

  cmsListPage: function(){
    if(!this.cmsListView){
      var cmsListView = new App.View.CMSListView();
      this.cmsListView = cmsListView.render();
    }
    this.showPage(this.cmsListView);
  },

  cmsRefresh: function(){
    console.log('refreshing');
    var self = this;

    $fh.cms.updateAll(function () {
      console.log('Successful mCMS refresh');
      $fh.cms.getField({path:"page1.name"}, function(page1Name) {
        console.log('Retrieved field value: ', page1Name);
        $fh.cms.getField({path:"page1.address"}, function(page1Address) {
          console.log('Retrieved field value: ', page1Address);
          //self.gotData({name: page1Name, address: page1Address});
          console.log('Retrieved field value: ', page1Address);
          App.models.cloudcallPage.set("page1Name", page1Name);
          App.models.cloudcallPage.set("page1Address", page1Address);
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


/*
  dataBrowserPage: function(){
    if(!this.databrowserView){
      var databrowserView = new App.View.DatabrowserView();
      this.databrowserView = databrowserView.render();
    }
    this.showPage(this.databrowserView);
  },

  nodePage: function(){
    if(!this.nodeView){
      var nodeView = new App.View.NodeView();
      this.nodeView = nodeView.render();
    }
    this.showPage(this.nodeView);
  },

  cloudIntegrationPage: function(){
    if(!this.integrationView){
      var integrationView = new App.View.IntegrationView();
      this.integrationView = integrationView.render();
    }
    this.showPage(this.integrationView);
  },

  weatherPage: function(){
    if(!this.weatherView){
      var weatherView = new App.View.WeatherSampleView();
      this.weatherView = weatherView.render();
    }
    this.showPage(this.weatherView);
  },

  analyticsPage: function(){
    if(!this.statsView){
      var statsView = new App.View.StatsView();
      this.statsView = statsView.render();
    }
    this.showPage(this.statsView);
  },
*/
  showPage: function(toPage){
    this.pageViewContainer.html(toPage);
    this.doTransition(this.mainViewContainer, this.pageViewContainer, 'slide-from-right', 'slide-to-left');
  },

  backToIntro: function(){
    this.doTransition(this.pageViewContainer, this.mainViewContainer, 'slide-from-left', 'slide-to-right');
  },

  doTransition: function(fromPage, toPage, transitionInEffect, transitionOutEffect){
    toPage.addClass('effeckt-page-animating effeckt-page-active');
    fromPage.addClass('effeckt-page-active effeckt-page-animating');
    fromPage.addClass(transitionOutEffect);
    toPage.addClass(transitionInEffect);
    var isNextPageEnd = false;
    var isCurrentPageEnd = false;
    var resetTransition = function(){
      fromPage.removeClass('effeckt-page-animating effeckt-page-active ' + transitionOutEffect);
      toPage.removeClass('effeckt-page-animating ' + transitionInEffect);
    };

    toPage.on( Effeckt.transitionAnimationEndEvent, function() {
      toPage.off( Effeckt.transitionAnimationEndEvent );
      isNextPageEnd = true;
      if ( isCurrentPageEnd ) {
        resetTransition();
      }
    });

    fromPage.on( Effeckt.transitionAnimationEndEvent, function () {
      fromPage.off( Effeckt.transitionAnimationEndEvent );
      isCurrentPageEnd = true;
      if ( isNextPageEnd ) {
        resetTransition();
      }
    });
  }
});