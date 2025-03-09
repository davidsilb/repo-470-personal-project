const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.get("/generate", (req, res) => {
    const workouts = ["Push-ups", "Squats", "Jump Rope", "Burpees", "Plank"];
    const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
    
    res.json({ workout: randomWorkout });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));