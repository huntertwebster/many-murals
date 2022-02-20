const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "hunterwebster",
    password: "manymuralsdb",
    database: "many_murals"
})

client.connect();


let query = `Select * from "user"`;
// let query = `Select * from "art_item"`;
// let query = `Select * from "images"`;



client.query(query, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message)
    }
    client.end;
})