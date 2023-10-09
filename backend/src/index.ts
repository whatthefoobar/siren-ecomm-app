import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { keyRouter } from "./routers/keyRouter";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";

dotenv.config();

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/TS-Siren";
// console.log(MONGODB_URI);

const MONGODB_URI = process.env.MONGODB_URI as string;

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

// Middleware for handling different routes based on NODE_ENV
// if (process.env.NODE_ENV === "development") {

//   app.get("/", (req: Request, res: Response) => {
//     res.json("Your API is up and running!");
//   });
// } else {
// In production mode or any other mode, serve static files and handle all other routes
app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.get("*", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"))
);
// }

//routes here via routers
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/seed", seedRouter);
app.use("/api/keys", keyRouter);

// previously
// app.get("/api/products/:slug", (req: Request, res: Response) => {
//   res.json(sampleProducts.find((x) => x.slug === req.params.slug));
// });

// const PORT = 4000;
const PORT: number = parseInt((process.env.PORT || "4000") as string, 10);
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
