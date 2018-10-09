var app = require('express')();
var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');

app.get('/book', function(req, res) {
    var id = req.query.bookId;

    Book.find({ _id: id }, function(err, book) {
        if(err) throw err;
        
        res.send(book[0]);
    });
});
app.post('/signup', function(req, res) {
  
    var obj={name:req.body.name,email:req.body.email,username:req.body.username,password:req.body.password};
  mongo.connect("mongodb://localhost:27017/madhav1",function(err,db){
    if(err) throw err;
    db.collection('datasaf').insert(obj,function(err,res){
        if(err)
        console.log.apply(err);
        console.log("successfully inserted");
    })
    res.send("inserted");
    });
    });
    app.post('/signin', function(req, res) {
        var username=req.body.username;
        var password=req.body.password;
        console.log(username);
                
      mongo.connect("mongodb://localhost:27017/madhav1",function(err,db){

                if(!err)
                {
                    db.collection('datasaf').find({username:username,password:password}).toArray(function(err,result){
                     
                        console.log(result);
                        if(err||result.length<=0)
                        console.log('invalid user');
                        else
                        res.send(result);
                        console.log("successful login");
                })


      }
    })})
    app.get('/data', function(req, res) {
        mongo.connect("mongodb://localhost:27017/madhav1",function(err,db){
            if(err) throw err;
            console.log("mongo is connected");
            db.collection('datasaf').find({}).toArray( function(err, sample) {
                if(err) throw err;
        console.log(sample);
        res.send(sample);
            });
        });  
    });
    
    app.delete('/data/:name', function(req, res) {

     
        console.log("name is"+req.params.name);
           var rname=req.params.name;
           console.log("param is"+rname)
    mongo.connect("mongodb://localhost:27017/madhav1",function(err,db)
    
    {
       console.log("before");
       db.collection('datasaf').deleteOne({name:rname},function(err,result){
    
               if(err) throw err;
    
               console.log("result is"+result);
    
               
               db.collection('datasaf').find({}).toArray(function(err, data) {
                   if(err) throw err;
                   console.log('mongo connected');
                   console.log(data);
                   res.send(data);
               });
    
       });
    
    })})
    

    app.put('/data/:name', function(req, res) {
       
        console.log("_id in api to update is"+req.params.name);
        console.log("_id in api to update is"+req.body.email); 
       
        mongoose.connect("mongodb://localhost:27017/madhav1",function(err,db){
    
        if(err) throw err;
       
    console.log("connected to db successfully to save update");
    var id = new mongoose.Types.ObjectId(req.params.name);
    console.log(id);
    db.collection('datasaf').find(id).toArray(function(err, data) {
        if(err) throw err;
       
        console.log(data);
        db.collection('datasaf').update({'_id':id},{$set:{name:req.body.name,email:req.body.email}});
       // db.collection('userdata').update({'_id':id},{$set:{name:req.body.name,password:req.body.password}});
       // res.send(data);
    });                                      
        //res.send(res);
       // res.send({message:"successfully registred"});
        });
        });


module.exports = app;















