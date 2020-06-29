const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mysql = require('mysql');
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql'
});

// connect to database
db.connect((err) => {
    try {
        if (err) {
            throw err;
        }

        console.log('Connected to database');
    } catch (error) {
        console.log('Failed to connect database');
    }

});

global.db = db;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/get-products', (req, res) => {
    try {
        let query = "SELECT * FROM `products` ORDER BY id ASC"; // query database to get all the players
        const output = {
            data: null,
            message: '',
            issuccess: true
        }

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                output.message = err;
                output.issuccess = false;
                res.send(output);
            }

            output.message = 'success';
            output.data = result;
            res.send(output);
        });

    } catch (error) {
        console.log(error)
    }
});


app.listen(port, () => console.log(`Intuz server app listening on port ${port}!`))