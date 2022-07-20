const mysql = require('mysql');
const http = require('http');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'dbTest',
    charset: 'utf8_general_ci'
});
connection.connect((err) => {
    if (err) {
        console.log(err);
    }else {
        console.log('connection success');
    }
});
const sqlCreate = "create table if not exists product(id int primary key auto_increment, name varchar(30) not null,price int)";
connection.query(sqlCreate, (err, result,fields) => {
    if (err) {
        throw err;
    }else {
        console.log(result);
    }
});
const sqlDrop = "drop table if  exists product";
connection.query(sqlDrop, (err, result, fields) => {
    if (err) {
        throw err;
    }console.log(result);
})

const sqlAlter = "alter table customer add column age int  default 30";
connection.query(sqlAlter, (err, result, fields) =>{
    if (err) throw err;
    console.log(result);
})