const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes

// TicTacToe
app.get("/tictactoe", (req, res) => {
  res.sendFile(path.join(__dirname, "public/tictactoe/index.html"));
});

app.get("/tictactoe/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public/tictactoe/privacy.html"));
});

app.get("/qrpro", (req, res) => {
  res.sendFile(path.join(__dirname, "public/qrpro/index.html"));
});

app.get("/qrpro/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public/qrpro/privacy.html"));
});

// TextToSpeech
app.get("/texttospeech", (req, res) => {
  res.sendFile(path.join(__dirname, "public/texttospeech/index.html"));
});

app.get("/texttospeech/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public/texttospeech/privacy.html"));
});

// Default
app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});