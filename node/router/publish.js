const express = require('express')
const router = express()
const db =require('../db/mysql')
const path = require('path')
//发布接口
router.post('/publish',(req,res)=>{
    // console.log(req);
    if(!req.file){
        return res.send('未上传封面！');
    }
        const articleInfo = {
            ...req.body,
            cover:path.join('./uploads',req.file.filename),
            date:new Date(),
        }
    
        console.log( req.file.filename);
    const sql = 'insert into node_article set ?'
    db.query(sql,articleInfo,(err,results)=>{
        if(err) return res.send(err.message)
        if(results.affectedRows!==1) return res.send('发布文章失败')
        res.send('发布文章成功')
    })
})


//获取接口
router.get('/getArticle',(req,res)=>{
    const sql = 'select * from  node_article where is_delete= 0'
    db.query(sql,(err,results)=>{
        if(err) return res.send(err.message)
        //查询成功
        res.send(results    )
    })
})
//根据 id 获取文章
router.get('/getById/:id',(req,res)=>{
    const sql = 'select * from node_article where id = ?'
    db.query(sql,req.params.id,(err,results)=>{
        if(err) return res.send(err.message)
        res.send(results)
    })
})
//删除文章接口
router.get('/delete/:id',(req,res)=>{
    const sql  = 'update node_article set is_delete = 1 where id =?'
    db.query(sql,req.params.id,(err,results)=>{
        if(err)return res.send(err.message)
        if(results.affectedRows!==1) return res.send('删除文章分类失败') 
        res.send('删除文章分类成功')
    })
})
module.exports = router