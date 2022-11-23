
const dbClass = require('../model/Home');

exports.register = (req, res, next) => {
    const {username, email, password} = req.body;
    if(username == ""){
        res.send({
            message: 'all feilds are required'
        })
        return;
    } 
    const db = new dbClass;

    const result = db.registerUser(username, email, password)
    result
    .then(data => res.json(data))
    .catch(err => next(err));
}