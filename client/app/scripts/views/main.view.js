/*global App, Backbone, _, Effeckt, $fh*/

function doCmsRefresh() {
  function setListData() {
    // $fh.cms.getList({path: 'page2.list'}, function (listValue) {
    $fh.cms.getField({path: 'simpleList.title'}, function (title) {
      App.models.cmsListPage.set("header", title);
    }, function (err) {
      console.log('error retrieving list title, err: ', err);
    });

    $fh.cms.getField({path: 'simpleList.subtitle'}, function (subtitle) {
      App.models.cmsListPage.set("text", subtitle);
    }, function (err) {
      console.log('error retrieving list subtitle, err: ', err);
    });

    $fh.cms.getList({path: 'simpleList.list'}, function (list) {
      App.models.cmsListPage.set("paragraphs", list);
    }, function (err) {
      console.log('error retrieving list data, err: ', err);
    });
  }

  function setAddressData() {
    $fh.cms.getList({path: 'addresses.list'}, function (list) {
      console.log("setting collection to:", list);
      App.collections.addresses.reset(list);
    }, function (err) {
      console.log('error retrieving list data, err: ', err);
    });
  }

  function setImagesData(){
    console.log("set Images data called");
    $fh.cms.getField({"path":"images.logo"},function(url){
      console.log("**** got image field images.logo ", url);
      App.models.cmsImagesPage.set("images",[{
        "image":url+"?rand="+Math.random() * 1000
      }]);
    },function (err){
      console.log(" **** error getting images logo ", err);
    });

    $fh.cms.getField({"path":"simpleFields.logo"},function(url){
      console.log("**** got image field simpleFields.logo ", url);
      App.models.cloudcallPage.set({"page1Img":url+"?rand=" + Math.random() * 1000});
    },function (err){
      console.log(" **** error getting images logo ", err);
    });
  }


  $fh.cms.updateAll(function () {
    console.log('Successful mCMS refresh');
    $fh.cms.getField({path:"simpleFields.name"}, function(page1Name) {
      console.log('Retrieved field value: ', page1Name);
      $fh.cms.getField({path:"simpleFields.address"}, function(page1Address) {
        console.log('Retrieved field value: ', page1Address);
        console.log('Retrieved field value: ', page1Address);
        App.models.cloudcallPage.set("page1Name", page1Name);
        App.models.cloudcallPage.set("page1Address", page1Address);
        setListData();
        setAddressData();
        setImagesData();
      }, function(err) {
        console.log('error retrieving field value, err: ', err);
      });
    }, function(err) {
      console.log('error retrieving field value, err: ', err);
    });
  }, function(err) {
    console.log('Failed mCMS refresh - err: ', err);
  });
}

/* Backbone View */
App.View.MainView = Backbone.View.extend({

  events: function(){
    var eventName  = 'click';
    var hash = {};
    hash[eventName + ' .populate-action'] = 'populateActionPage';
    hash[eventName + ' .cloud-action'] = 'cloudActionPage';
    hash[eventName + ' .cms-list'] = 'cmsListPage';
    hash[eventName + ' .cms-address'] = 'cmsAddressPage';
    hash[eventName + ' .btn.refresh'] = 'cmsRefresh';
    hash[eventName + ' .btn.back'] = 'backToIntro';
    hash[eventName + ' .cms-images'] = 'cmsImagesPage';
    return hash;
  },

  initialize: function(options){
    this.mainViewContainer = options.mainContainer;
    this.pageViewContainer = options.pageContainer;
    _.bindAll(this, 'populateActionPage', 'cloudActionPage', 'cmsListPage', 'cmsAddressPage', 'backToIntro');
  },

  render: function(){
    var introView = new App.View.IntroView();
    this.introView = introView.render();
    this.mainViewContainer.html(this.introView);
  },

  populateActionPage: function(){
    if(!this.populateView){
      var populateView = new App.View.PopulateView();
      this.populateView = populateView.render();
    }
    this.showPage(this.populateView);
  },

  cloudActionPage: function(){
    if(!this.cloudCallView){
      var cloudCallView = new App.View.CloudcallView();
      this.cloudCallView = cloudCallView.render();
    }
    this.showPage(this.cloudCallView);
  },

  cmsAddressPage: function(){
    console.log('calling CMS address page');
    if(!this.cmsAddressView){

      var cmsAddressView = new App.View.CMSAddressesView();
      this.martinView = cmsAddressView;
      this.cmsAddressView = cmsAddressView.render();
    }
    this.showPage(this.cmsAddressView);
  },

  cmsImagesPage : function (){
    if(!this.cmsImageView){
      var cmsImageView = new App.View.CMSImageView();
      this.cmsImageView = cmsImageView.render();
    }
    this.showPage(this.cmsImageView);
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

    doCmsRefresh();
  },

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

