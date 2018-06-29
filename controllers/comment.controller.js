const ComModel = require('../models/comment.model')
const moment = require('moment')

const save = async (req,res,next)=>{
    res.setHeader('Content-Type','application/json; charset=utf8')
    req.body.CreatTime = moment().format('YYYY-MM-DD hh:mm')
    req.body.CommentPic = req.filename
    console.log(req.body)
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
    const result = await  ComModel.find()
    res.send(result)
}

module.exports = {
    save,
    find
}