const blog = require('../model/blog');
const comments = require('../model/comments');

module.exports.createblog = async(req,res)=>{
try{
const response = await blog.create(req.body);
if(response){
    return res.status(200).json({error : false , message : "Blog successfully created", response})
}
else{
    return res.status(400).json({error : true, message : "Blog not created"}) 
}
}catch(error){
    console.error(error.message)
    return res.status(500).json({error : true , message : "Something went wrong"}) 
}
},


module.exports.get_allblogs = async(req,res)=>{
try{
const response = await blog.findAll();
if(response){
    return res.status(200).json({error : false , message : "Blog Fetched", response})
}
else{
    return res.status(400).json({error : true, message : "Blog not Fetched"}) 
}
}catch(error){
    console.error(error.message)
    return res.status(500).json({error : true , message : "Something went wrong"}) 
}
},


module.exports.get_blogby_id = async(req,res)=>{
try{
const response = await blog.findOne({where:{id:req.params.id}});
if(response){
    return res.status(200).json({error : false , message : "Blog Fetched", response})
}
else{
    return res.status(400).json({error : true, message : "Blog not Fetched"}) 
}
}catch(error){
    console.error(error.message)
    return res.status(500).json({error : true , message : "Something went wrong"}) 
}
},

module.exports.get_blogby_author = async(req,res)=>{
    try{
    const response = await blog.findAll({where:{author:req.params.author}});
    if(response){
        return res.status(200).json({error : false , message : "Blog Fetched", response})
    }
    else{
        return res.status(400).json({error : true, message : "Blog not Fetched"}) 
    }
    }catch(error){
        console.error(error.message)
        return res.status(500).json({error : true , message : "Something went wrong"}) 
    }
    },

module.exports.update_blog = async(req,res)=>{
try{
    const response = await blog.findOne({where:{Id:req.params.id}})
    response.title = req.body.title,
    response.author = req.body.author,
    response.description = req.body.description,
    response.content = req.body.content,
    response.category = req.body.category,
    response.save();
    if(response){
        res.status(200).json({error : true , message : "Blog updated", response})
    }
    else{
        res.status(400).json({error : true , message : "Blog not updated"})
    }
    }catch(error){
        console.error(error.message);
        res.status(500).json({error : true , message : "Something went wrong"})
    }
    },


module.exports.delete_blog = async(req,res)=>{
try{
    const deletedblog = await blog.destroy({where:{Id : req.params.id}})
    if(deletedblog){
        return res.status(200).json({error : false , message : `Blog deleted`})
    }
    else{
        return res.status(400).json({error : true , message : "Blog not deleted"})
    }
    }catch(error){
    console.error(error.message);
    return res.status(500).json({error : true , message : "Something went wrong"})
    }
    },


module.exports.delete_all_blog = async(req,res)=>{
try{
    const deletedblogs = await blog.destroy({where:{}})
    if(deletedblogs){
        return res.status(200).json({error : false , message : `Blogs deleted`})
    }
    else{
        return res.status(400).json({error : true , message : "Blogs not deleted"})
    }
    }catch(error){
    console.error(error.message);
    return res.status(500).json({error : true , message : "Something went wrong"})
    }
    }

    // ------------------------comments---------------------------------------------


module.exports.createcomment = async(req,res)=>{
try{
const response = await comments.create(req.body);
if(response){
    return res.status(200).json({error : false , message : "comment successfully created", response})
}
else{
    return res.status(400).json({error : true, message : "comment not created"}) 
}
}catch(error){
    console.error(error.message)
    return res.status(500).json({error : true , message : "Something went wrong"}) 
}
},


module.exports.get_comments_blogid = async(req,res)=>{
try{
const response = await comments.findAll({where:{blog_id : req.params.id}});
if(response){
    return res.status(200).json({error : false , message : "comment Fetched", response})
}
else{
    return res.status(400).json({error : true, message : "comment not Fetched"}) 
}
}catch(error){
    console.error(error.message)
    return res.status(500).json({error : true , message : "Something went wrong"}) 
}
},

module.exports.update_comment = async(req,res)=>{
try{
    const response = await comments.findOne({where:{Id:req.params.id}})
    response.blog_id = req.body.blog_id,
    response.user_name = req.body.user_name,
    response.email = req.body.email,
    response.comment = req.body.comment
    response.save();
    if(response){
        res.status(200).json({error : false , message : "comment updated",response})
    }
    else{
        res.status(400).json({error : true , message : "comment not updated"})
    }
    }catch(error){
        console.error(error.message);
        res.status(500).json({error : true , message : "Something went wrong"})
    }
    },

module.exports.delete_comment = async(req,res)=>{
try{
    const deletedcomment = await comments.destroy({where:{Id : req.params.id}})
    if(deletedcomment){
        return res.status(200).json({error : false , message : "comment deleted"})
    }
    else{
        return res.status(400).json({error : true , message : "comment not deleted"})
    }
    }catch(error){
    console.error(error.message);
    return res.status(500).json({error : true , message : "Something went wrong"})
    }
    }