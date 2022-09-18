import mysql from 'mysql2'

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "brute",
    port: 8889,
})

export default conn;