var async = require('async');

var section1_name = 'simpleFields';
var section2_name = 'addresses';
var section3_name = 'simpleList';
var section4_name = 'images';
var fs = require('fs');

module.exports = function populate(cb){
  setTimeout(function (){
    console.log("running set up");

    if(! $fh || ! $fh.cms) {
      console.error("CMS IS NOT PRESENT");
    } else {
      async.series([
        function removeSetions (callback){
          $fh.cms.getAll({}, function (err, data){
            if(err){
              console.log("error getting data ", err);
              callback(err);
            }else{
              async.each(data.sections, function (sec, cb1){
                console.log("removing section ", sec);
                if(sec._id){
                  $fh.cms.removeSection({"id":sec._id},cb1);
                }else{
                  cb1();
                }
              },callback);
            }
          });
        },
        function addSections (callback){
          var sections = [section1_name, section2_name, section3_name,section4_name];
          async.each(sections,function (sName, cb2){
            $fh.cms.addSection({"name":sName,"parent":"","modifiedBy":"test@test.com","path":sName},cb2);
          },callback);
        },
        function setSection(callback) {
          var fields = {};
          fields[section1_name] = [
            {
              "name":"name",
              "section": section1_name,
              "type":"string",
              "modifiedBy":"test@test.com",
              "value":"FeedHenry",
              "binaryFileName": "",
              "binaryContentType": "",
              "binaryUrl": "",
              "binaryHash": "",
              "data":[],
              "fields":[]
            },
            {
              "name":"logo",
              "section": section1_name,
              "type":"file",
              "modifiedBy":"test@test.com",
              "value":"",
              "binaryFileName": "",
              "binaryContentType": "",
              "binaryUrl": "",
              "binaryHash": "",
              "data":[],
              "fields":[]
            },
            {
              "name":"address",
              "section": section1_name,
              "type":"paragraph",
              "modifiedBy":"test@test.com",
              "value":"Cleaboy Business Park, Waterford",
              "binaryFileName": "",
              "binaryContentType": "",
              "binaryUrl": "",
              "binaryHash": "",
              "data":[],
              "fields":[]
            }
          ];
          fields[section2_name] = [
              {
                "name":"list",
                "section": section2_name,
                "type":"list",
                "modifiedBy":"test@test.com",
                "value":"",
                "binaryFileName": "",
                "binaryContentType": "",
                "binaryUrl": "",
                "binaryHash": "",
                "data":[
                  { "name": "Feedhenry Waterford", "address": "Second Floor,\nUnit 3B,\nCleaboy Business Park,\nOld Kilmeaden Road,\nWaterford."},
                  { "name": "Feedhenry Dublin", "address": "12 Duke Lane Upper,\nDublin 2,\nIreland"},
                  { "name": "Feedhenry UK", "address": "Knyvett House,\nWatermans Business Park,\nThe Causeway,\nStaines,\nSurrey,\nTW18 3BA,\nEngland"},
                  { "name": "Feedhenry USA", "address": "15 New England Executive Park,\nBurlington,\nMA 01803,\nUSA"}
                ],
                "fields":[{
                  "name":"name",
                  "type":"string"
                },{
                  "name":"address",
                  "type":"paragraph"
                }]
              }
          ];
          fields[section3_name] = [
              {
                "name":"title",
                "section":section3_name,
                "type":"string",
                "modifiedBy":"test@test.com",
                "value":"CMS Lists",
                "binaryFileName": "",
                "binaryContentType": "",
                "binaryUrl": "",
                "binaryHash": "",
                "data":[],
                "fields":[]
              },
              {
                "name":"subtitle",
                "section":section3_name,
                "type":"string",
                "modifiedBy":"test@test.com",
                "value":"This sho an example of simple CMS lists",
                "binaryFileName": "",
                "binaryContentType": "",
                "binaryUrl": "",
                "binaryHash": "",
                "data":[],
                "fields":[]
              },
              {
                "name":"list",
                "section":section3_name,
                "type":"list",
                "modifiedBy":"test@test.com",
                "value":"",
                "binaryFileName": "",
                "binaryContentType": "",
                "binaryUrl": "",
                "binaryHash": "",
                "data":[
                  { "paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at volutpat mauris. In et tellus porta, lacinia ligula at, vestibulum augue. Donec a pretium libero, quis accumsan ipsum. Sed cursus quam non laoreet malesuada. Nam ut eros et dolor gravida euismod. Nam in faucibus arcu. Maecenas sed justo ut odio accumsan euismod. Nam a orci quis leo placerat tincidunt elementum at eros. Vivamus non lectus ac nulla volutpat viverra sed at tortor. Pellentesque pretium neque justo, aliquam lacinia risus gravida vitae. Ut eu interdum magna, quis congue odio. Duis sed velit eget dolor faucibus ultricies a vitae metus. Donec sagittis hendrerit viverra. In commodo nulla et nunc euismod suscipit. Duis suscipit, lorem non ornare vehicula, nulla nibh euismod sapien, non accumsan ligula purus a lorem."},
                  { "paragraph":"Nunc tincidunt egestas porttitor. Aliquam interdum vulputate lectus, in posuere metus tempor a. Sed vel diam et turpis interdum posuere a vel erat. Donec semper purus id arcu gravida, at congue lorem feugiat. Pellentesque ultrices dignissim bibendum. Suspendisse placerat scelerisque interdum. Sed vitae tortor cursus nunc laoreet pretium id quis dolor. Nullam egestas venenatis odio, sit amet euismod lorem porta eu. Mauris nulla odio, egestas non odio pulvinar, condimentum cursus tellus. Curabitur vehicula condimentum tincidunt."},
                  { "paragraph":"Vivamus a nisi at sapien pretium blandit. Phasellus vitae justo condimentum arcu adipiscing rhoncus. Morbi auctor urna eget tellus placerat, lobortis bibendum leo sagittis. Aenean gravida ornare lorem, id porta enim volutpat vitae. Aliquam sit amet malesuada tellus. Suspendisse potenti. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer aliquam nulla vitae odio fringilla tempor. Sed massa libero, cursus nec nisl eu, fringilla condimentum turpis. Fusce imperdiet felis urna, ut placerat velit semper a. Nulla quam lectus, tempor nec dolor a, pretium mollis turpis. Quisque ac rhoncus nisl. Cras fringilla quis velit eget pharetra. Donec varius nisi vitae augue tincidunt porttitor."}
                ],
                "fields":[{
                  "name":"paragraph",
                  "type":"paragraph"
                }]
              }
          ];

          fields[section4_name] = [{
            "name":"logo",
            "section": section4_name,
            "type":"file",
            "modifiedBy":"test@test.com",
            "value":"",
            "binaryFileName": "",
            "binaryContentType": "",
            "binaryUrl": "",
            "binaryHash": "",
            "data":[],
            "fields":[]
          },]

          $fh.cms.getAll({}, function (err, data){
            if(err){
              console.log("error get all ", err);
              callback(err);
            }else{
              console.log("updating section");
              async.each(data.sections,function (sec,cb){

                var sectionJson = JSON.stringify(sec);
                var secDiff = JSON.parse(sectionJson);
                secDiff.fields = fields[sec.name];
                $fh.cms.setSectionStructureAndData(secDiff,function (err, ok){
                  console.log("returned from setSection ", ok);
                  cb();
                });
              },function addImage (){


                $fh.cms.uploadField({
                  "filePath":__dirname + "/img/nodejs.jpeg",
                  "fileName":"test_image.jpg",
                  "section":"simpleFields",
                  "field":"logo",
                  "type": "file"
                },function (err, ok){
                  $fh.cms.uploadField({
                    "filePath":__dirname + "/img/nodejs.png",
                    "fileName":"npmimg.jpg",
                    "section":"images",
                    "field":"logo",
                    "type": "file"
                  },callback);
                });
              });
            }
          });
        }
      ], function (err, ok){
        console.log("completed set up ", err);
        cb(err, {status: "CMS Initialised"});
      });
    }


  }, 1000);

};
