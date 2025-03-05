// Select elements
const surpriseBtn = document.getElementById("surprise-btn");
const surpriseDiv = document.getElementById("surprise");
const music = document.getElementById("bgMusic");

// Function to show surprise with animation
function showSurprise() {
    // Show the image with animation
    surpriseDiv.style.display = "block";
    surpriseDiv.style.animation = "fadeIn 1s ease-in-out";

    // Start confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Fireworks effect
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 150,
                spread: 100,
                startVelocity: 40,
                decay: 0.9,
                origin: { x: Math.random(), y: Math.random() - 0.2 }
            });
        }, i * 500);
    }

    // Play background music
    music.play().catch(error => console.log("Autoplay blocked:", error));
}

// Event listener for button click
surpriseBtn.addEventListener("click", showSurprise);
