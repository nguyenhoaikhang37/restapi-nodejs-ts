import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

import aRouter from "./routes/aRoutes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Database
const URI = process.env.MONGODB_URL.replace("<PASSWORD>", process.env.MONGODB_PASSWORD);
mongoose
  .connect(URI, {
    autoIndex: false,
  })
  .then((val) => {
    console.log("Connect to DB successfully!🚀");
  });

// Routes
app.use("/", aRouter);

// Run server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
