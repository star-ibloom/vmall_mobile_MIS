const ComModel = require('../models/comment.model')
const moment = require('moment')
const fs = require('fs')
const path = require('path')

const save = async (req,res,next)=>{
    res.setHeader('Content-Type','application/json; charset=utf8')
    req.body.CreatTime = moment().format('YYYY-MM-DD hh:mm')
    req.body.CommentPic = req.filename
    // console.log(req.body)
    const result = await ComModel.save(req.body)
    // console.log(result)

    if(result){
        res.render('comment',{ret:true, data: JSON.stringify({msg:'succ'})})
    } else{ 
        res.render('comment',{ret:false, data: JSON.stringify({msg:'fail'})})
    }
}

const find =async (req,res,next)=>{
    res.setHeader('Content-Type','application/json; charset=utf8')
    const result = await ComModel.find()
    res.send(result)
}

const remove = async (req,res,next) => {
    res.setHeader('Content-Type','application/json; charset=utf8')    
    const {id,filename} = req.body
    fs.unlink(path.resolve(__dirname,'../public/uploads',filename),async (err) => {
        if(err){
            res.send({ret:false,data:{msg:"删除失败！"}})
        }
        const result =await ComModel.remove(id)
        res.send({ret:true,data:result})
    })
}

module.exports = {
    save,
    find,
    remove
}