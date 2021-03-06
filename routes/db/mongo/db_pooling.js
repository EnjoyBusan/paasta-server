/**
 * generic-pool 연동
 * mongo 풀 모듈 구현
 */


var generic_pool = require("generic-pool");
var mongoClient	 = require("mongodb").MongoClient;

var url = '';
if (process.env.VCAP_SERVICES) {
    // cloud env.
    var cloud_env = JSON.parse(process.env.VCAP_SERVICES);
    var mongo_env = cloud_env["Mongo-DB"][0]["credentials"];

    url = mongo_env.uri;

} else {
    // local env.
    url = 'mongodb://d3e35ad5-9f49-43ae-bc85-08e39ec1d8eb:fc23791e-b2d8-402d-b070-90bfbdb5dcfa@10.30.60.53:27017/e37e541c-75de-4f01-8196-63e2d902e768';
}

var pooling = generic_pool.Pool({
    name:"mongo",
    create:function(cb){
        mongoClient.connect(url, function(err, db){
            if (err) console.log("mongo 연결오류");
            else {
                cb(err, db);
            }
        });
    },
    destroy:function(myDb){
        myDb.close(function(err){
            if( err)        console.log("mysql 연결해제오류");
            //              else            console.log("mysql 연결해제성공");
        });
    },
    min:1,
    max:2,
    idleTimeoutMillis:1000*500,
    log:false

});


module.exports = pooling;

