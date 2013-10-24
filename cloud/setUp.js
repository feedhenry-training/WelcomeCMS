var async = require('async');


module.exports = function populate(cb){
  setTimeout(function (){
    console.log("running set up");

    if(! $fh || ! $fh.cms){
      console.error("CMS IS NOT PRESENT");
    }else{
      async.series([
        function removeSetions (callback){
          $fh.cms.getAll({}, function (err, data){
            if(err){
              console.log("error getting data ", err);
              callback(err);
            }else{
              async.each(data.sections, function (sec, cb1){
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
          var sections = ["page1","page2","page3"];
          async.each(sections,function (sName, cb2){
            $fs.cms.addSection({"name":sName,"parent":"","modifiedBy":"test@test.com"},cb2);
          },callback);
        },
        function setSection(callback){
          var fields = {
            "page1":[
              {
                "name":"name",
                "section":"page1",
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
                "name":"address",
                "section":"page1",
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
            ],
            "page2":[
              {
                "name":"list",
                "section":"page2",
                "type":"list",
                "modifiedBy":"test@test.com",
                "value":"",
                "binaryFileName": "",
                "binaryContentType": "",
                "binaryUrl": "",
                "binaryHash": "",
                "data":[{
                  "name":"Feedhenry",
                  "address":"Cleaboy Business Park, Waterford"
                }],
                "fields":[{
                  "name":"name",
                  "type":"string"
                },{
                  "name":"address",
                  "type":"paragraph"
                }]
              }
            ],
            "page3":[
              {
                "name":"title",
                "section":"page3",
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
                "name":"subtitle",
                "section":"page3",
                "type":"string",
                "modifiedBy":"test@test.com",
                "value":"Cleaboy Business Park, Waterford",
                "binaryFileName": "",
                "binaryContentType": "",
                "binaryUrl": "",
                "binaryHash": "",
                "data":[],
                "fields":[]
              },
              {
                "name":"list",
                "section":"page3",
                "type":"list",
                "modifiedBy":"test@test.com",
                "value":"",
                "binaryFileName": "",
                "binaryContentType": "",
                "binaryUrl": "",
                "binaryHash": "",
                "data":[{
                  "name":"paragraph",
                  "address":"Cleaboy Business Park, Waterford"
                }],
                "fields":[{
                  "name":"paragraph",
                  "type":"paragraph"
                },{
                  "name":"address",
                  "type":"paragraph"
                }]
              }
            ]
          };

          $fh.cms.getAll({}, function (err, data){
            if(err){
              console.log("error get all ", err);
              callback(err);
            }else{
              async.each(data.sections,function (sec,cb){
                sec.fields = fields[sec.name];
                $fh.cms.setSectionStructureAndData(sec,cb);
              },callback);
            }
          });


        }],function (err, ok){
        console.log("completed set up ", err);
        cb();
      });
    }


  },1000);

} ;
