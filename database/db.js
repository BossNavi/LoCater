const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config({path: './.env'})

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    PORT: process.env.DB_PORT
})

module.exports = db;

// module.exports = (query) => {
//     return new Promise((resolve, reject) => {
//          db.connect(err=>{
//             if(err){
//                 reject(err)
//             } else {
//                 db.query(query,(error, results)=> {
//                     if(error){
//                         reject(error)
//                     } else {
//                         resolve(results)
//                     }
//                 })  
//             }

//          })
//     })
// } 