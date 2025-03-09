const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.get("/generate", (req, res) => {
    const workouts = ["Push-ups", "Squats", "Jump Rope", "Burpees", "Plank"];
    const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
    
    res.json({ workout: randomWorkout });
});

app.post("/workouts", async (req, res) => {
    const { name, duration, category } = req.body;

    if (!name || !duration || !category) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const newWorkout = await pool.query(
            "INSERT INTO workouts (name, duration, category) VALUES ($1, $2, $3) RETURNING *",
            [name, duration, category]
        );
        res.status(201).json(newWorkout.rows[0]);
    } catch (err) {
        console.error("Database Error:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/workouts", async (req, res) => {
    try {
        const allWorkouts = await pool.query("SELECT * FROM workouts");
        res.json(allWorkouts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));