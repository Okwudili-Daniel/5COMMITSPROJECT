import cors from "cors";
import express, { Application } from "express";

const port: number = 2213;
const app: Application = express();

app.use(express.json());
app.use(cors());

const Server = app.listen(port, () => {
  console.log("Connected");
});
process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  Server.close(() => {
    process.exit();
  });
});
