const mongoose = require('mongoose')

const userModel = new mongoose.Schema(
{
    username:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
    
},
{
    collection : 'login-user'
}
   
)
module.exports = mongoose.model('users',userModel)