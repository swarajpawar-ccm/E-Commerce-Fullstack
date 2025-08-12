import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from './routes/productRoutes'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors()); 
app.use('/api/products',productRoutes)

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req: Request, res: Response) => {
  res.send("E-commerce API with TypeScript is working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
