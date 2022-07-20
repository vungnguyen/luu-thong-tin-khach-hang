const mysql = require('mysql');
const http = require('http');
const fs = require('fs');
const qs = require('qs');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'dbTest',
    charset: 'utf8_general_ci',
});
connection.connect((err) => {
    if (err) {
        console.error(err);
    }else {
        console.log('connect success');
        const sql = "create table customer (id int primary key auto_increment, name VARCHAR(30) NOT NULL,address VARCHAR(50) NOT NULL)";
        connection.query(sql, (err) => {
            if(err) {
                console.error(err);
            }
            console.log('create success');
            connection.end();
        });
        return;
    }
});