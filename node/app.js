const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const path = require('path')

app.use(cors())
app.use(express.urlencoded({extended:false}))

let stroage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'uploads'))
        //文件夹名称
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'.jpg')
        //文件名称
    }
})
const upload = multer({storage:stroage})
// console.log(path.join(__dirname,'uploads'));
const publish = require('./router/publish')
app.use(upload.single('cover'),publish)

app.listen('3007',function(){
    console.log('api server running at http://127.0.0.1:3007');
})