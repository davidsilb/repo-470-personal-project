document.getElementById("generate").addEventListener("click", async function() {
    try {
        const response = await fetch("https://repo-470-personal-project.onrender.com/generate");
        const data = await response.json();

        if (data.workout) {
            document.getElementById("workout").innerHTML = `
                <div class="workout-card">
                    <h2>${data.workout.name} &#128170;</h2>
                    <p>&#9203; <strong>Duration:</strong> ${data.workout.duration} mins</p>
                    <p>&#127947;&#65039; <strong>Category:</strong> ${data.workout.category}</p>
                </div>
            `;
        } else {
            document.getElementById("workout").innerHTML = "<p>&#10060; No workouts found.</p>";
        }
    } catch (error) {
        console.error("Error fetching workout:", error);
        document.getElementById("workout").innerHTML = "<p>&#10060; Error fetching workout. Try again!</p>";
    }
});