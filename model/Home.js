const db = require("../database/db");

class DBservice{

    async registerUser(username, email, password){
        try {
            let response = await new Promise((resolve, reject) => {
                const query = 'INSERT INTO accounts (username,email,password) VALUES (?, ?, ?)';
                db.query(query, [username, email,password],(err, result) => {
                    if(err) reject(new Error(err.message));
                    resolve(result);
                })
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log("error is: " + error.message)
        }
       
    }


    
}

module.exports = DBservice;
