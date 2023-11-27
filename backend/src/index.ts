import cors from "cors";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { keyRouter } from "./routers/keyRouter";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/TS-Siren";
// const MONGODB_URI_REMOTE = process.env.MONGODB_URI_REMOTE as string;

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
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:5173",
      "https://ts-siren-shop.onrender.com",
    ],
  })
);
// mw to access the body pf the post request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes here via routers
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/seed", seedRouter);
app.use("/api/keys", keyRouter);

// Check the environment
const environment = process.env.NODE_ENV;

if (environment === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  app.get("*", (req: Request, res: Response) =>
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"))
  );
} else {
  app.get("/", (req: Request, res: Response) => {
    res.json("Your API is up and running!");
  });
}

const PORT: number = parseInt((process.env.PORT || "4000") as string, 10);
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
