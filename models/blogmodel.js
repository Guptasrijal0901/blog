const mongoose=  require("mongoose");
const blogScheme = new mongoose.Schema({
Blogername:String,
Blogtitle:String,
Blogdate:Date,
Blogdescription:String,
Blogsummary:String,
})
const blogdetail= mongoose.model("blogdata" , blogScheme)
module.exports=blogdetail;