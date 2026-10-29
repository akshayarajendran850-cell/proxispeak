require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the ProxiSpeak API!");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ProxiSpeak backend is running!"
  });
});

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`ProxiSpeak server running at http://localhost:${PORT}`);
  });
}

startServer();
