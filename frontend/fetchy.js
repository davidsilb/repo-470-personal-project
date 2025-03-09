document.getElementById("generate").addEventListener("click", () => {
    fetch("https://back-end-URL-here?")
        .then(response => response.json())
        .then(data => {
            document.getElementById("workout").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error("Error:", error));
});