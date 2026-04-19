// Target Date: June 9th, 2026
const targetDate = new Date("June 9, 2026 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Display updates with padStart for consistent 2-digit look
    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');

    // On completion
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-container").innerHTML = "<h1 class='title'>It's Finally June 9th! ✨</h1>";
    }
};

// Create floating background hearts
const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤'; 
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 5 + "s"; // 5s to 8s
    heart.style.fontSize = Math.random() * 10 + 15 + "px"; // Variable size
    
    document.getElementById('heart-container').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 8000);
};

// Initialization
const interval = setInterval(updateCountdown, 1000);
setInterval(createHeart, 600); // New heart every 0.6 seconds
updateCountdown();
