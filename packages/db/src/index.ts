import Mongoose from "mongoose";

const AdminSchema = new Mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new Mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new Mongoose.Schema({
    title:String,
    description:String,
    price: Number, 
    imageLink: String,
    published : Boolean
});


export const Admin = Mongoose.model('Admin', AdminSchema);
export const User = Mongoose.model('User', UserSchema);
export const course = Mongoose.model('Course', CourseSchema);