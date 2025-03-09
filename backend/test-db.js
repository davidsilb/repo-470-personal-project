const pool = require("./db");

async function testDB() {
    try {
        const res = await pool.query("SELECT NOW()");
        console.log("Database connected successfully:", res.rows);
    } catch (err) {
        console.error("Database connection error:", err.message);
    }
}

testDB();