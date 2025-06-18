const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://gz6tahcmr6pxjbxs5pg762efry0ngjln.lambda-url.us-east-1.on.aws/"); // Replace with your actual Lambda URL
        let data = await response.json();
        counter.innerHTML = ` Views: ${data}`;
    } catch (error) {
        console.error("Error fetching views:", error);
        counter.innerHTML = "Views: NA/A";
    }
}

updateCounter();
