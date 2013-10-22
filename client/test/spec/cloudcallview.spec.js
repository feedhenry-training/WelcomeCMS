/*jshint unused:false */
/*global describe, it, beforeEach, afterEach, expect, App, $fh */
describe('render cloud action page', function(){
  var pageDiv = $('<div>', {id:'page_view_container'});
  var cloudCallView = new App.View.CloudcallView({
    el: pageDiv[0]
  });
  cloudCallView.render();
  it('should display navbar', function(){
    expect(pageDiv.find('.navbar').length).toEqual(1);
    expect(pageDiv.find('.navbar .btn.back').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').length).toEqual(1);
    expect(pageDiv.find('.navbar-text').text()).toMatch(/mobile cms/i);
  });

  it('should display content', function(){
    expect(pageDiv.find('.content_view .container .appheading').length).toEqual(1);
    expect(pageDiv.find('.content_view .container .appheading').text()).toMatch(/mobile cms/i);
    expect(pageDiv.find('.cms-refresh-button').length).toEqual(1);
    expect(pageDiv.find('.response_content').html()).toEqual('');
    expect(pageDiv.find('.extra_response').hasClass('hidden')).toBe(true);
  });

  it('cms refresh button should be triggered and extra content should be shown', function(){
    //mock $fh.cms...
    $fh.cms.updateAll = function(success, fail){
      success();
      // expect(pageDiv.find('.response_content').html()).toMatch(/Successful mCMS refresh/i);
      // expect(pageDiv.find('.extra_response').hasClass('hidden')).toBe(false);
    };
    $fh.cms.getField = function(params, success, fail){
      success("tset field value");
      // expect(pageDiv.find('.content_view .container .appdata').text()).toMatch(/tset field value/i);
      expect(pageDiv.find('.response_content').html()).toMatch(/tset field value/i);
      //expect(pageDiv.find('.extra_response').hasClass('hidden')).toBe(false);
    };
    pageDiv.find('.cms-refresh-button').trigger('click');
  });
});
