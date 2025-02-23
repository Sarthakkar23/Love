// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

// Moving "No" Button
const noBtn = document.getElementById("no-btn");
noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Typing Effect Function
function typeMessage(message, duration) {
    let i = 0;
    const container = document.getElementById("message-container");
    container.style.width = "auto";
    container.innerHTML = ""; // Clear existing text

    function type() {
        if (i < message.length) {
            container.innerHTML += message[i];
            i++;
            setTimeout(type, duration / message.length);
        }
    }

    type();
}

// "Yes" Button Click
document.getElementById("yes-btn").addEventListener("click", function () {
    // Clear the screen and show "Just for You"
    document.body.innerHTML = `
        <h1 style='color:#ff4b5c;'>❤️ Just for You ❤️</h1>
        <div id="message-container"></div>
    `;

    // Create an audio element dynamically
    const bgMusic = document.createElement("audio");
    bgMusic.src = "music.mp3";
    bgMusic.id = "bg-music";
    bgMusic.style.display = "none";
    document.body.appendChild(bgMusic);

    // Create the "Click to Play Music" button
    const playButton = document.createElement("button");
    playButton.innerText = "Click to Play Music 🎶";
    playButton.style.fontSize = "20px";
    playButton.style.padding = "10px";
    playButton.style.background = "#ff4b5c";
    playButton.style.color = "white";
    playButton.style.border = "none";
    playButton.style.cursor = "pointer";
    playButton.style.marginTop = "20px";
    document.body.appendChild(playButton);

    // Love Proposal Paragraph
    const message = "I knew you would say YES! 💖 You are my world, my happiness, and my love forever! 🌹 Every moment with you is a dream come true. I promise to cherish and love you endlessly. 💑";

    // When the user clicks the button, start music and show message
    playButton.onclick = () => {
        bgMusic.play();
        playButton.remove(); // Remove the button after playing music

        // Start typing message immediately
        typeMessage(message, 15000); // Typing speed set to 15 seconds (adjust as needed)
    };
});
