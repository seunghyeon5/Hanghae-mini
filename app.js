const express = require('express');
const mongoose = require('mongoose');
const port = 8080;

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const commentRouter = require("./routes/comment");

 

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


// app.use("/api", [postRouter, userRouter, commentRouter]);


app.use('/api', express.urlencoded({ extended: false }), [ 
    postRouter, userRouter, commentRouter ]);

app.use("/", (req, res) =>{
    res.send('테스트 페이지')
});



app.listen(port, () => {
    console.log(port, "포트로 서버가 켜졌어요!")
});