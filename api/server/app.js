import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import mongoose from 'mongoose'

import indexRoute from './routes/index';
import usersRoute from './routes/users';
import authRoute from './routes/auth'
import blogRoute from './routes/blog'

const app = express()

const mongo_uri = "mongodb+srv://joe:sert1s@cluster0.yqxb8.mongodb.net/blog?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRoute);
app.use('/user', usersRoute);
app.use('/auth', authRoute)
app.use('/blogs', blogRoute)

module.exports = app;