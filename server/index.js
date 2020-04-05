const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const config = require("./config/key");

//application/x-www-form-urlencoded

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://SDH:tlseog08!@cluster0-jxe5q.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/posts", require("./routes/posts"));
app.use("/api/users", require("./routes/users"));

const port = process.env.PORT || 5000;
console.log("현재 포트" + process.env.PORT);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
