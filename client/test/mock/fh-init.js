//define $fh & $fh.act
//$fh.act should be overridden in each test to return mock data
window.$fh = window.$fh || {};
window.$fh.act = function(){

};
window.$fh.cms = { };
window.$fh.cms.init = function () { };
window.$fh.cms.updateAll = function () { };
window.$fh.cms.getField = function () { };
