import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName:
        {
            type: String,
            required: true

        },
        email:
        {
            type: String,
            required: true,
            unique:true
        },
        phoneNumber:{
          type: Number,
          required:true,
          unique:true
        },
        password:
        {
           type:String,
           required:true
        },
        role:{
            types:String,
            enum:["student","recruiter"],
            required:true
        }
        ,
        profile:{
            bio:{type:String},
            skills:[{type:String}],
            resume:{type:String}, // url to resume file 
            resumeOriginalName:{type:String},
            company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'},
            profilePhoto:{
                type:String,
                dafault :""
            }
        }
    },{timestamps:true}
);
export const User=mongoose.model('User',userSchema);