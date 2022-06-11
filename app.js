const express = require('express');
<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const mongoose = require('mongoose');   
>>>>>>> ce9e9bb371b57149401f2c4c14d4c8599d9b1fcb
const port = 3000;


const postRouter = require("./routes/post");
const userRouter = require("./routes/user");

mongoose.connect('mongodb://0.0.0.0/goodnight', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

const app = express();


//body 읽기
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", [postRouter, userRouter]);

app.use("/", (req, res) =>{
    res.send('테스트 페이지')
});


app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌어요!")
});