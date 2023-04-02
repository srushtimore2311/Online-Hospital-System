var con =require('./connection');
var express=require('express');
var app=express();

var bodyParser =require('body-parser');
const { connect } = require('./connection');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
 
app.set('view engine','ejs');
app.get('/',function(req,res){
res.sendFile(_dirname+'/sru.html');
});


app.post('/',function(req,res){
    var comment=req.body.comment;
  
    con.connect(function(error){
        if(error) throw error;

     var sql="INSERT INTO from(comment) value('"+comment+"')";
     con.query(sql,function(error,result){
        if(error) throw error;
        res.redirect('/comment');
        //res.send('Appointment Sucessfull !!!' +result.insertID);
     });
    });
    
    });

    app.get('/comment',function(req,res){
        con.connect(function(error){
            if(error) console.log(error);
            var sql ="delect * from comment";

            con.query(sql,function(error,result){
                if(error)console.log(error);
                
               res.writableNeedDrain(_dirname+"/comment",{form:result});

            });
        });
    });

app.listen (3000);
