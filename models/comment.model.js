const db= require('../utils/mongo.util')

var CommentSchema = db.Schema({
  CommentPic:{ type: String, required:true },
  goodNum: { type: String, required:true},
  CommentTitle: { type: String, required:true},
  CommentFrom: { type: String, required:true},
  CommentBody: { type: String, required:true},
  CommentPhone: { type: String, required:true},
  CreatTime :{ type: String, required: true }
})

var Comment = db.model('Comments', CommentSchema)

const save =(data) => {
  let com = new Comment(data)
  return com.save().then((result) => {
    return result
  }).catch((err) => {
    return false
  })
}

const find =() => {
  return Comment.find({}).then(result => result)
}

module.exports = {
  save,
  find
}  