require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express(); //initializing express app

app.use(cors()); //to allow local servers to communicate with each other
app.use(express.json());

//routes
app.use("/api", taskRoutes);

//connecting to DB and starting server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(8000, () => {
      console.log("listening to 8000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
