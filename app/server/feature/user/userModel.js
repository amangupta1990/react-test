// TODO: make a connection to MongoDB.. for now just emulate
const saltRounds = 10;
const bcrypt = require('bcrypt');


function userModel() {
    var Users = [];

    this.create = function (obj)// TODO ..  handle validation 
    {
        return new Promise((resolve, reject) => {
            hashPassowrd(obj.pass).then((hash) => {



                let newUser = {}
                newUser.name = obj.name;
                newUser.email = obj.email;
                newUser.pass = hash;
                Users.push(newUser);

                resolve({
                    email: newUser.email,
                })

            })
        })
    }
    // private methods
    function hashPassowrd(pass) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(pass, saltRounds, function (err, hash) {
                resolve(hash);
            });
        })
    }

    // public methods
    this.comparePassword = function (pass, hash) {
        return new Promise((resolve,reject)=>{

        
        bcrypt.compare(pass, hash, function (err, res) {
            resolve (res)
        });

    })
    }


    this.getUserByEmail = function (email, pass) {
        let user = Users.find((u) => u.email.toLowerCase() == email.toLowerCase());
        return user;
    }



    return this;

}


var model = new userModel();
module.exports = {
    model
}


