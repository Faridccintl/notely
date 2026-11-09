import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Status ok!", uptime: process.uptime() });
});
app.listen(PORT || 5000, () => {
  console.log(`Server starting at port ${PORT}, at env ${ENV}`);
});
