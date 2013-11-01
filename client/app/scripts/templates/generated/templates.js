this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["cloudcall"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container\">\n    <h1 class=\"appheading\">";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <h2>Name</h2>\n    <p class=\"appdata appdata_name\">";
  if (stack1 = helpers.page1Name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page1Name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p class=\"appdata appdata_address\">";
  if (stack1 = helpers.page1Address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page1Address; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p>Our favourite language is:</p>\n    <p class=\"appdata\" ><img src=\"";
  if (stack1 = helpers.page1Img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page1Img; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" /></p>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["cmsaddresses"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <option value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n    ";
  return buffer;
  }

  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div class=\"row\">\n    <select>\n      <option value=\"\">Select</option>\n    ";
  stack1 = helpers.each.call(depth0, depth0.addresses, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n\n    <hr />\n    <div id=\"yolks\">\n      <p id=\"name\"></p>\n      <textarea readonly class=\"addressbox\" id=\"address\"></textarea>\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["cmsimages"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p><img style=\"width:180px;\" src=\""
    + escapeExpression(((stack1 = depth0.image),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></p>\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p><img src=\""
    + escapeExpression(((stack1 = depth0.image),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></p>\n      ";
  return buffer;
  }

  buffer += "\n<div class=\"content_view\">\n    <div class=\"container\">\n        <h1 class=\"appheading\">";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n        <h2>Images</h2>\n\n      ";
  stack1 = helpers.each.call(depth0, depth0.images, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <h2>List</h2>\n      ";
  stack1 = helpers.each.call(depth0, depth0.listimages, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["cmslist"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p>"
    + escapeExpression(((stack1 = depth0.paragraph),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <div class=\"row\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.paragraphs, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["intro"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"col-xs-6 col-sm-4 ";
  if (stack1 = helpers.responsiveClass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.responsiveClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"container start-menu-item ";
  if (stack1 = helpers.className) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n      <a class=\"btn start-menu-item-icon\">\n        <i class=\"icon-";
  if (stack1 = helpers.iconClass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.iconClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " icon-2x\"></i>\n      </a>\n      <h5>";
  if (stack1 = helpers.menuTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.menuTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n      <h6>";
  if (stack1 = helpers.menuSubTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.menuSubTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h6>\n    </div>\n  </div>\n  ";
  return buffer;
  }

  buffer += " "
    + "\n<div class=\"banner well center text-center\">\n<h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n<p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n<div class=\"row\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.menuItems, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n\n";
  return buffer;
  });

this["App"]["Templates"]["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n<nav class=\"navbar navbar-default\" role=\"navigation\">\n<div class=\"nav\">\n  <div class=\"navbar-inner\">\n    <ul class=\"nav pull-left\">\n      <li>\n        <a class=\"btn back\"><i class=\"icon-chevron-left icon-2x\"></i></a>\n      </li>\n    </ul>\n    <ul class=\"nav nav-center\">\n      <li>\n        ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      </li>\n    </ul>\n    <ul class=\"nav pull-right\">\n      <li>\n        <a class=\"btn refresh\"><i class=\"icon-refresh icon-2x\"></i></a>\n      </li>\n    </ul>\n  </div>\n</div>\n</nav>";
  return buffer;
  });

this["App"]["Templates"]["populate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n <div class=\"content_view\">\n  <div class=\"container\">\n    <h1>";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n    <p>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    <p><a class=\"btn btn-primary btn-lg populate-action-button\"><i class=\"icon-external-link-sign\"></i> ";
  if (stack1 = helpers.buttonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n    <p class=\"response_content alert\"></p>\n    <p class=\"extra_response hidden\">\n      ";
  if (stack1 = helpers.extraRes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.extraRes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </p>\n  </div>\n</div>";
  return buffer;
  });

this["App"]["Templates"]["samplepage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " "
    + "\n <div class=\"content_view\">\n <div class=\"container\">\n    <div class=\"row advert1\">\n      <div class=\"col-xs-6 advert1Image\">\n        <img src=\"";
  if (stack1 = helpers.advert1Image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert1Image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n      </div>\n      <div class=\"col-xs-6 advert1Text\">\n        <h1 class=\"advert1Heading\">";
  if (stack1 = helpers.advert1Header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert1Header; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <p class=\"advert1Details\">";
  if (stack1 = helpers.advert1Details) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert1Details; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        <div class=\"advert1LinkContainer\">\n          <a class=\"advert1Link\" href=\"";
  if (stack1 = helpers.advert1LinkURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert1LinkURL; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\"";
  if (stack1 = helpers.advert1LinkButton) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert1LinkButton; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row advert2\">\n      <div class=\"col-xs-9 advert2Text\">\n        <h1 class=\"advert2HeadingRed\">";
  if (stack1 = helpers.advert2HeaderRed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert2HeaderRed; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <h1 class=\"advert2HeadingBlack\">";
  if (stack1 = helpers.advert2HeaderBlack) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert2HeaderBlack; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <div class=\"advert2LinkContainer\">\n          <a class=\"advert2Link\" href=\"";
  if (stack1 = helpers.advert2LinkURL) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert2LinkURL; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.advert2LinkText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert2LinkText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </div>\n        <p class=\"advert2OfferValid\">";
  if (stack1 = helpers.advert2OfferValid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert2OfferValid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n      </div>\n      <div class=\"col-xs-3 advert2Image\">\n        <img src=\"";
  if (stack1 = helpers.advert2Image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.advert2Image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n      <div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });