var con =require('./connection');
var express=require('express');
var bodyParser =require('body-parser');
const { connect } = require('./connection');
var app=express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
 
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.sendFile(__dirname+'/Online Hospital Services.html');
});
app.get('/new.html', function(req, res){
    res.sendFile(__dirname + '/new.html')
})
app.get('/form',function(req,res){
    con.connect(function(error){
        if(error) console.log(error);
        var sql ="select * from form";

        con.query(sql,function(error,result){
            if(error)console.log(error);
            
            res.render(__dirname+"/form",{form:result});

        });
    });
});

app.post('/new.html',function(req,res){
    
    var name =req.body.name;
    var gender =req.body.gender;
    var phone =req.body.phone;
    var email =req.body.email;
    var address =req.body.address;
    var doctor =req.body.doctor;
    var timing  =req.body.timing;
    var date =req.body.date;

    

     var sql="INSERT INTO form values('"+name+"','"+gender+"','"+phone+"','"+email+"','"+address+"','"+doctor+"','"+timing+"','"+date+"')";
     con.query(sql,function(error,result){
        if(error) throw error;
        res.send('Appointment Booked Successfully!!!');
        //res.send('Appointment Sucessfull !!!' +result.insertID);
     });
});



app.post('/comment',function(req,res){
    var comment =req.body.comment ; 
    var sql="INSERT INTO comment values('"+comment+"')";
    con.query(sql,function(error,result){
        if (error) throw error;
        res.send("Thank You For Review!!!");
    })
});
    
app.get('/Online%20Hoaspital%20Services.html',function(req,res){
    res.redirect('/')



});
app.get('/Medicine.html',function(req,res){
    res.sendFile(__dirname+'/Medicine.html');
    
});
app.get('/surgery.html',function(req,res){
    res.sendFile(__dirname+'/surgery.html');
    
});
app.get('/Orthopedics.html',function(req,res){
    res.sendFile(__dirname+'/Orthopedics.html');
    
});
app.get('/Gynaecology.html',function(req,res){
    res.sendFile(__dirname+'/Gynaecology.html');
    
});
app.get('/sru.html',function(req,res){
    res.sendFile(__dirname+'/sru.html');
    
});

app.listen (3000);
