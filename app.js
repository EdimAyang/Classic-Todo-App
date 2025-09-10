const log = console.log;
import express from "express";
import mongoose from "mongoose";
import router from "./routes/Todo.Routes.js";
import cors from "cors";
const app = express();
import "dotenv/config";

const dbPassword = process.env.DB_PASSWORD;
//middleware
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true, // if using cookies/auth headers
  })
);

//routes
app.use("/api/todos", router);

//connecting to mongoDB
mongoose
  .connect(
    `mongodb+srv://jacksonprince590_db_user:${dbPassword}@tododb2.pwyzpc5.mongodb.net/?retryWrites=true&w=majority&appName=todoDB2`
  )
  .then(() => {
    log("Connected to database");
    app.listen(3000, () => {
      log("server is running on port 3000");
    });
  })
  .catch((error) => {
    log(error);
  });
