import express from "express"
import Blog from '../models/blog'

const router = express.Router()

router.get("/",(req,res) => {
    Blog.find()
    .then(products => {
        res.json(products)
    })
    .catch(err => res.status(400).json({ errors : err.errors }))
})

router.post('/',(req,res) => {
    Blog.create(req.body)
    .then(blog => res.json({ blog }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

router.put('/edit',(req,res) => {
    console.log(req.body)
    Blog.update({ id : req.body.id },req.body)
    .then(result => res.json({ result }))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

router.put("/update",(req,res) => {
    const arr = req.body
    arr.forEach(obj  => {
        return Blog.update(
            { ...obj },
            { multi : true }
        )
        .then(() => console.log(obj.id))
    })
    res.json({})
})





router.delete('/del',(req,res) => {
    console.log(req.body)
    Blog.remove({ _id : req.body.id}, {
        justOne: true
    })
    .then(result => res.json({result}))
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }))
})

export default router