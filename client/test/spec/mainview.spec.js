/*jshint unused:false */
/*global describe, it, beforeEach, afterEach, expect, App */
describe('render main page', function(){
  var mainPageDiv = $('<div>', {id: 'main_page', 'class': 'page effeckt-page-active'});
  var pageDiv = $('<div>', {id:'page_view_container'});
  var mainView = new App.View.MainView({
    el: $('body')[0],
    mainContainer: mainPageDiv,
    pageContainer: pageDiv
  });
  mainView.render();
  //verify header
  it('should contains a banner', function(){
    var header = mainPageDiv.find('.banner h1');
    expect(header.text()).toMatch(/feedhenry mobile cms/i);
  });
  
  it('should contain 5 page links', function(){
    //verify there is 1 option displayed
    var pageLinks = mainPageDiv.find('.row .container');
    expect(pageLinks.length).toEqual(5);
  });
});
