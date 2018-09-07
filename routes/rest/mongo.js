

var query = require('../db/mongo/query_processing')

/*
exports.ranking = (req,res)=>{
    query.Ranking((err, result)=>{
        console.log(result)
        res.send(result);
    })
}


exports.addLog= (req,res)=>{
    query.addLog((err,result)=>{
        console.log(result)
        res.send(result)
    })
}


//상신빠 서버 search
exports.public_health= (req,res)=>{
    var options = { method: 'GET',
        url: 'http://testdb.paas-ta.co.kr/public_health',
        qs: { TITLE: req.query.TITLE },
    }

    request(options, function (error, response, body) {
        if (error) throw new Error(error)
        res.send(body)
    })
}
*/
