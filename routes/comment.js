const express = require('express');
const router = express.Router();

const ComController = require('../controllers/comment.controller')

const fileuploadMiddleware = require("../middlewares/fileupload")

router.route('/save')
.post(fileuploadMiddleware.fileupload,ComController.save);

router.route('/find')
.get(ComController.find)

router.route('/remove')
.delete(ComController.remove)

module.exports = router;

