const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const helmet = require("helmet");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

//////////////////////////////////////////////////////////////
// HTTPS CREATE /////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// const https = require("https");
// const fs = require("fs");

// const privateKey = fs.readFileSync(
//   "/etc/letsencrypt/live/sdhportfolio.site/privkey.pem",
//   "utf8"
// );
// const certificate = fs.readFileSync(
//   "/etc/letsencrypt/live/sdhportfolio.site/cert.pem",
//   "utf8"
// );
// const ca = fs.readFileSync(
//   "/etc/letsencrypt/live/sdhportfolio.site/chain.pem",
//   "utf8"
// );

// const credentials = {
//   key: privateKey,
//   cert: certificate,
//   ca: ca,
// };

// const https_server = https.createServer(credentials, app);
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/posts", require("./routes/posts"));
app.use("/api/users", require("./routes/users"));
app.use("/uploads", express.static("uploads"));
app.use("/api/comment", require("./routes/comment"));

const port = process.env.PORT || 5000;

///////////LOCAL_SERVER/////////////////////////
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

///////////////HTTPS_SERVER///////////////
// https_server.listen("8443", () => {
//   console.log("Https Server Running at 8443");
// });
