//이곳에 쿼리 작성

var pool    = require("./db_pooling")
var mongodb = require("mongodb")
var ObjectId= require("mongodb").ObjectID
const bodyParser  = require ('body-parser');
/*


exports.addLog =(cb, param)=>{ // param= request.body
    console.log(param)
    pool.acquire((err,db)=>{
        if(err) console.log("Connection failed"+err)
        else {
            var collection = db.collection('Log')
            var newLog = new Log({
                post_Title: param.post_Title,
                User_id: param.User_id,
                counting: 0
            })
        }


        collection.countDocuments({'post_Title':param.post_Title},(err, count)=>{
            if(count==0){
                newLog.save((err, data)=> {
                    if (err) console.log(err);
                    else console.log('new Log is Added!')
                })
            }else{
                collection.find()
                    .select('counting')
                    .where('post_Title').equals(param.post_Title)
                    .then(count=>{
                        pres=count[0].counting;
                        return collection.updateOne({post_Title:param.post_Title},{$set:{counting: pres+1}}
                        , (err,result)=>{
                            console.log('update good', result);
                            pool.release(db);
                            cb(err, result)
                        })
                    })
            }
            pool.release(db)
        })
    })
}



exports.Ranking=(cb)=>{
    pool.acquire((err,db)=>{
        if(err) console.log("Connection failed"+err)
        else {
            var collection = db.collection('Orgs'); // collection
        }

            // 컬렉션 가져와주기
            return new Promise((resolve,reject)=>{
                collection.find()
                    .limit(5)
                    .select('post_Title')
                    .sort({Counting: -1})
                    .then(items=>{
                        console.log(items)
                        resolve(items)
                    })
                    .exec((err,result)=>{
                        if(err) console.log(err);
                        else    console.log(result);
                        pool.release(db)
                        if(result ==null ) cb(err, [])
                        else               cb(err, JSON.stringify(result))
                    })
            })
    })

}
*/
