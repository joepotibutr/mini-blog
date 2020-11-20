import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import uniqueValidator from 'mongoose-unique-validator'

const schema = new mongoose.Schema({
    author : { 
        type : String , 
        required : true , 
        lowercase : true , 
        index : true ,
        unique : true
    },
    passwordHash : { 
        type : String , 
        required : true 
    }
},{ 
    timestamps : true 
})

schema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password , this.passwordHash)
}


schema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password,10) 
}


schema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
        author : this.author
    },'secretkey')
}

schema.methods.toAuthJSON = function toAuthJSON() {
    return {
        author : this.author,
        token : this.generateJWT()
    }
}

schema.plugin(uniqueValidator,{ message : 'This author is already taken' })


export default mongoose.model('User',schema)