const bcrypt = require('bcryptjs')
const saltRounds = 20

const hashPassword = async(password)=>{
    let salt = await bcrypt.genSalt(saltRounds)
    let hashPassword = await bcrypt.hash(password,salt)
    return hashedPassword
}

const hashCompare = asyc()=>{

}

module.exports={hashPassword,hashCompare}