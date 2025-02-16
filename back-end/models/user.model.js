import mongoose from "mongoose"
import { type } from "os"

const userSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    phone:{type:String},
    designation:{type:String}
})
export default mongoose.model.user||mongoose.model("user",userSchema)
