const express = require("express");
const blog= express();
const blogdetail= require("./models/blogmodel");
const {connectDatabase}=require("./connection/connect");
blog.use(express.json());
// save task coming from frontend to database 
//create operation
blog.post("/api/postblog", async(req, res)=>{
    try {
        console.log(req.body)
        const newblog={
            Blogername:req.body.name,
            Blogtitle:req.body.title,
            Blogdate:req.body.date,
            Blogdescription:req.body.description,
            Blogsummary:req.body.summary,
        };
        const blogsave= new blogdetail(newblog);
        await blogsave.save();
        return res.status(500).json({sucess: true, message: "Data saved"})
    } catch (error) {
        return res.status(300).json({sucess: false, error: error.message});
    }
})
//read operation
blog.get("/api/getblog", async (req , res)=>{
    try {
        const data = await blogdetail.find();
        return res.status(500).json({
        sucess: true,
        data: data
        })
    } catch (error) {
        return res.status(400).json({sucess: false, error:error.message})
    }
})
connectDatabase();
const PORT = 6000;
blog.listen(PORT, async()=>{
    await console.log(`Server is running at port ${PORT}`)
});
