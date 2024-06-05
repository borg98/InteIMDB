import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
