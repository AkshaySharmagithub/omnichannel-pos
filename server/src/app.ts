import express from "express";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";

import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";
import inventoryRoutes from "./routes/inventoryRoutes";
import orderRoutes from "./routes/orderRoutes";

import { errorHandler, notFound } from "./middleware/errorMiddleware";

const app = express();


// Middlewares
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));


// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Omnichannel POS Backend is running",
  });
});


// Prevent favicon 404 error
app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});


// API Routes
app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/inventory", inventoryRoutes);

app.use("/api/orders", orderRoutes);


// 404 Middleware
app.use(notFound);


// Global Error Handler
app.use(errorHandler);


export default app;