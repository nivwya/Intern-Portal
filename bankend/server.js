const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const dummyData = {
  name: "Nivi Nivi",
  referralCode: "nivi2025",
  totalRaised: 13500,
  rewards: ["Amazon Gift Card", "Free Swag", "Leaderboard Badge"]
};

const leaderboard = [
  { name: "Nivi", raised: 13500 },
  { name: "Arjun", raised: 12000 },
  { name: "Meera", raised: 10000 }
];

app.get('/api/user', (req, res) => {
  res.json(dummyData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
