import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnect } from "./lib/dbconnect";
import { compilerRouter } from "./routes/compilerRouter";

const app = express();

app.use(express.json());
app.use(cors());
config();

app.use("/compiler",compilerRouter);

dbConnect();

app.listen(4000, () => {
  
  console.log("http://localhost:4000");

});
