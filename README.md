# Overview

This project is used to demonstrate some of the feeatures provided by the FeedHenry platform, as well as promoting best practices when developing apps using the platform.

# Client App

The main frameworks & tools used by the client app are:

* Backbone.js (http://backbonejs.org/)
* Bootstrap 3 (http://getbootstrap.com/)
* Yeoman (http://yeoman.io/)
* Jasmine (http://pivotal.github.io/jasmine/)

For more details about how to develop and build the client app, please check the README file in the client/ directory.

# Cloud App

The following functions are demoed in the cloud app:

* How to use MongoDB
* How to use Redis Cache
* How to use thirdparty service providers
* How to write integration & acceptance tests using Whiskey

For more details please check the README file in the cloud/ directory.

# Development Setup

If you want to develop the app, you can fork the repo and created a FeedHenry app either using the App Studio or fhc. Then you can clone the app and run the following command:

    fhc local <appId> packages=app

Then go to http://127.0.0.1:8000 to see the app.

If you want to see the distribution version, run the following commands instead:

    cd client
    grunt server
    cd ..
    fhc local <appId>

Then do your normal development in the client/app directory and everytime when a file is changed, the distribution version will be generated automatically.