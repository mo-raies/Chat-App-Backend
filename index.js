// const express = require("express") ;  method 1 
import express from "express" ; // method 1
import dotenv from "dotenv" ;
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import messageRouter from "./routes/messageRoute.js"
import cors from "cors"
import {app,server} from "./socket/socket.js";

dotenv.config({})

// const app = express();

const PORT = process.env.PORT || 5000 ;

//middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cookieParser());

const corsOption = {
origin: ['https://chat-app-nu-nine-37.vercel.app'],
// origin: ['*'],
credentials: true
}
app.use(cors(corsOption));

app.get("/", (req, res) => {
  res.status(200).json({
      succss: true,
      message: "Backend Running Successfully"
  })
});
//routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRouter);


server.listen (PORT,() => {
connectDB();
console.log(`Server with Socket.IO listening on port ${PORT}`)
});

