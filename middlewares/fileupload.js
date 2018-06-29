const multer = require('multer')
const path = require("path")

const fileupload = (req,res,next) => {
    
    const storage = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,path.resolve(__dirname ,'../public/uploads') )
        },
        filename: function(req,file,cb){
            let fn = file.originalname
            let dot = fn.lastIndexOf('.')
            let filename = file.fieldname + '-' + Date.now() + fn.substr(dot) 
            req.filename = filename
            // console.log(filename)
            
            cb(null,filename )
        }
    })
    const upload = multer({storage:storage}).single('CommentPic')
    upload(req,res,function(err){
        if(err){
            console.log(err)
            return
        }else{
            next()
        }
    })

    
}

module.exports  = {
    fileupload
}