const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
   name:{ type: String, required: true },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    industry: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    country: { type: String, required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })

// const contactsSchema=new mongoose.Schema({
//    contact:[{
//     name:String,
//     designation:String,
//     company:String,
//     industry:String,
//     email:String,
//     mobile:String,
//     country:String,
//    }],
//     userid:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
// },{timestamps:true})

const contactModel = mongoose.model('Contact', contactsSchema)

module.exports = contactModel;
