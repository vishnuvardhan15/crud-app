const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRouter = require("./Router/userRouter");

dotenv.config({path: "./config.env"})
const PORT = process.env.PORT;

const app = express();

//middlewares
app.use(express.json()); //parsing
app.use((req, res, next) => { // own middleware
  console.log("control passed from middleware");
  next();
}); 
app.use(morgan("tiny")); //logger
app.use("/", userRouter); //CRUD operations

//server listening
app.listen(PORT, () => console.log(`server running at port:${PORT}`));

module.exports = app;


