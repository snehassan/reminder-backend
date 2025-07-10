
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/reminders', (req, res) => {
  const { title, datetime } = req.body;

  console.log('Reminder received:', title, datetime); 
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Reminder backend is live!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
