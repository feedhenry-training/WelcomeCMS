/*global App, Backbone*/
/* Define Backbone Models */
App.Model.PageModel = Backbone.Model.extend({

});

App.models.introPage = new App.Model.PageModel({
  title: 'Welcome',
  header: 'Welcome To FeedHenry',
  text: 'Learn about and interact with mCMS',
  nextButtonText: 'Let\'s Start',
  menuItems: [
    {className: 'cloud-action', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'mCMS', menuSubTitle: 'Try it now', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'cloud'},
    {className: 'cms-list', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'mCMS List Page', menuSubTitle: 'CMS Lists', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'gears'},
    {className: 'cms-address', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'mCMS Address', menuSubTitle: 'CMS Adresses', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'contact'}
        /*,
              {className: 'data-browser', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Data Browser', menuSubTitle: 'Use MongoDB', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'table'},
              {className: 'nodejs-page', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Powered By Nodejs', menuSubTitle: 'Cloud code', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'bolt'},
              {className: 'cloud-integration', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Cloud Integration', menuSubTitle: 'Use Plugins', responsiveClass: 'col-md-3 col-lg-2', iconClass: 'gears'},
              {className: 'weather-sample', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Example', menuSubTitle: 'Use Location', responsiveClass: 'col-md-2 col-md-offset-2 col-lg-2 col-lg-offset-0', iconClass: 'sun'},
              {className: 'stats-analytics', imgPath: '/img/touch/apple-touch-icon.png', menuTitle: 'Stats', menuSubTitle: 'See the data', responsiveClass: 'col-md-2 col-md-offset-4 col-lg-2 col-lg-offset-0', iconClass: 'bar-chart'} 
        */
  ]
});

App.models.cloudcallPage = new App.Model.PageModel({
  title: 'Mobile CMS',
  header: 'Simple CMS Fields',
  text: 'Using Studio you can change the data show in this screen of the app. Tap the button to request a refresh of CMS data from the cloud. The fields displayed here are in section page1, and are called name and address',
  buttonText: 'Refresh CMS',
  extraRes: '',
  cmsFieldData: "Initial App Data",
  page1Name: "Initial name value when app installed",
  page1Address: "Initial address value when app installed"
});

App.models.statsPage = new App.Model.PageModel({
  title: 'Stats',
  header: 'Stats',
  titleWidth: '50',
  text: 'In addition to all of our App install/usage Analytics, you can also instrument your cloud code to see exactly how it is performing. Go to the Stats section of the Studio and see if your device has been detected.'
});

App.models.nodePage = new App.Model.PageModel({
  title: 'Powered By Nodejs',
  header: 'Powered By Nodejs',
  text: 'FeedHenry Apps are made much more powerful by our Node.js cloud code. You have all of the functionality of Node available to you including all of its modules. This means you get powerful responsive business logic doing all the heavy lifting for your application.',
  titleWidth: '150'
});

App.models.databrowserPage = new App.Model.PageModel({
  title: 'Data Browser',
  header: 'Data Browser',
  text: 'Enter your name and then tap the button to save your name in our cloud database',
  moreInfo: 'Now go to the Data Browser section of the App Studio and see if you can find your name stored there.',
  inputFieldLabel: 'Please Enter Your Name',
  buttonText: 'Save',
  extraRes: 'Your data is now saved. Please go to studio and see your data using the Data Browser.'
});

App.models.weatherPage = new App.Model.PageModel({
  title: 'Location Example',
  header: 'Location Example',
  geoText: 'Let’s grab your location and do something with it. Tap the button to find your location',
  geoButtonText : 'Get My Location',
  geoLabelText: 'My Location',
  getWeatherText: 'Now we are going to use that location to request weather information from an online web-service via our cloud code. Tap the button to do this.',
  getWeatherButtonText: 'Get My Weather Info',
  titleWidth: '180'
});

App.models.cmsListPage = new App.Model.PageModel({
  title: 'cms List Page',
  header: 'CMS list',
  titleWidth: '150',
  text: 'You can easily integrate with mCMS. Check out the the App Studio to see how to change the following data',
  paragraphs:[
    {paragraph:'The Quick brown fox jumped over the lazy dogs.'},
    {paragraph: 'Hello World'}
  ]
});

App.Model.Address = Backbone.Model.extend({});

App.Collection.Addresses = Backbone.Collection.extend({
  model: App.Model.Address
});

App.collections.addresses = new App.Collection.Addresses([
    {name: 'FH', address: "Cleayboy"},
    {name: 'Martin', address: "Tramore"}
  ]);

App.models.cmsAddresses = new App.Model.PageModel({
  title: 'CMS Addresses',
  header: 'Addresses',
  titleWidth: '150',
  text: 'Check out the the App Studio to see how to change the following address data',
  addresses:[
    {name: 'FH', address: "Cleayboy"},
    {name: 'Martin', address: "Tramore"}
  ]
});