module.exports= (error,req,res,next)=>{
    res.status(500).send({
        error:500,
        route:req.path,
        body:req.body,
        query:req.query,
        message:`server error ${error.message}`,        
    })
}