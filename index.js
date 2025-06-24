const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/createReminder", (req, res) => {
  const { title, date } = req.body;
  console.log("✅ Reminder received:", title, date);
  res.status(200).json({ message: "Reminder created!", title, date });
});

app.get("/", (req, res) => {
  res.send("Reminder backend is live!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
