//express 웹 프레임워크를 사용하겠다.
const express = require("express");
const app = express();

require("dotenv").config();
const { PORT } = process.env;

app.use(express.json());


//라우터가 응답을 받을수 있게 위치를 알려준다.
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comment");
const usersRouter = require("./routes/users");
const likeRouter = require("./routes/like");


//'/'경로로 요청이 들어왔다면 보일 반응
app.get("/", (req, res) => {
  res.send("Welcome My Blog");
});


//라우터를 사용하겠다.
app.use("/", [postRouter, commentRouter, usersRouter,likeRouter]);


//서버를 키켰을때의 보일 반응
app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
