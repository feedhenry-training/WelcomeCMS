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
    + "</p>\n    <p><a class=\"btn btn-primary btn-lg cms-refresh-button\"><i class=\"icon-external-link-sign\"></i> ";
  if (stack1 = helpers.buttonText) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.buttonText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n    <p class=\"response_content alert\"></p>\n    <p class=\"extra_response hidden\">\n      ";
  if (stack1 = helpers.extraRes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.extraRes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </p>\n    <h2>Name</h2>\n    <p class=\"appdata appdata_name\">Initial name value when app installed</p>\n    <h2>Address</h2>\n    <p class=\"appdata appdata_address\">Initial address value when app installed</p>\n  </div>\n</div>";
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
    + "\n <div class=\"content_view\">\n  <div class=\"container cmslist\">\n    <h1>";
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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "style=\"width: ";
  if (stack1 = helpers.titleWidth) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleWidth; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px\"";
  return buffer;
  }

  buffer += " "
    + "\n<nav class=\"navbar navbar-default\" role=\"navigation\">\n<div class=\"nav pull-left\">\n  <a class=\"btn back\"><i class=\"icon-chevron-left icon-2x\"></i></a>\n</div>\n<div class=\"navbar-title\" ";
  stack1 = helpers['if'].call(depth0, depth0.titleWidth, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n<div class=\"nav navbar-text\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n</div>\n</nav>";
  return buffer;
  });