import express from "express"
import User from "../models/user"

const router = express.Router()

router.get("/",(req,res) => {
  User.find()
  .then(user => {
      res.json(user)
  })
  .catch(err => res.status(400).json({ errors : err.errors }))
})

router.post("/", (req, res) => {
  const { author, password } = req.body.user
  const user = new User({ author })
  user.setPassword(password)
  user
    .save()
    .then(userRecord => {
      res.json({ user: userRecord.toAuthJSON() })
    })
    .catch(err => res.status(400).json({ errors: err.errors }))
})

router.delete('/del',(req,res) => {
  console.log(req.body)

  User.remove({username : req.body.username})
  .then(result => res.json({result}))
  .catch(err => res.status(400).json({ errors: err.errors }))
})

export default router