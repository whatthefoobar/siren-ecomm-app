import cors from "cors";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/TS-Siren";
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("error mongodb");
  });

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://127.0.0.1:5173"],
  })
);

// not needed but I like it
app.get("/", (req: Request, res: Response) => {
  res.json("Your API is up and running!");
});

//routes here via routers
app.use("/api/products", productRouter);
app.use("/api/seed", seedRouter);

// previously
// app.get("/api/products/:slug", (req: Request, res: Response) => {
//   res.json(sampleProducts.find((x) => x.slug === req.params.slug));
// });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
