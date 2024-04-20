import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { compilerRouter } from "./routes/compilerRouter";
import { dbConnect } from "./lib/dbConnect";

const app = express();

app.use(express.json());
app.use(cors());
config();

app.use("/compiler", compilerRouter);

dbConnect();

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
