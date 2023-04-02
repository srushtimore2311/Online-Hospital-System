var mysql= require('mysql');

var con=mysql.createConnection({
    host:'localhost',
    user:'myadmin',
    password:'SJM#23rush6',
    database:'appointment'
});

con.connect((err) => {
    if(err){
        console.log("Failed!");
    }else{
        console.log("Connected");
    }
});

module.exports=con;