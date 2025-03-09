document.getElementById("generate").addEventListener("click", () => {
    fetch("https://repo-470-personal-project.onrender.com/generate")
        .then(response => response.json())
        .then(data => {
            document.getElementById("workout").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error("Error:", error));
});