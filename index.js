const mysql = require('mysql');
const http = require('http');
const url = require('url');
const qs = require('qs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'dbTest',
    charset: 'utf8_general_ci'
});

connection.connect(function (err) {
    if (err) {
        throw err.stack;
    }
    else {
        console.log("connect success");
    }
});

const server = http.createServer(async (req, res) => {
    try {
        if (req.url === "/user" && req.method === 'POST') {
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const data = Buffer.concat(buffers).toString();
            const userData = JSON.parse(data);
            console.log(userData)
            const sql = `INSERT INTO customer(name, address) VALUES ('${userData.name}', '${userData.address}');`;
            connection.query(sql, (err, results, fields) => {
                if (err) throw err;
                res.end("Success");
            });
        }
    } catch (err) {
        return res.end(err.message);
    }
});

server.listen(3000, function () {
    console.log('server running at http://localhost:3000 ')
});