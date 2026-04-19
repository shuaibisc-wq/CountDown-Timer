const targetDate = new Date("June 9, 2026 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-container").innerHTML = "<h1 class='title'>It's your day! 💖</h1>";
    }
};

const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    // Randomly pick between two heart styles
    heart.innerHTML = Math.random() > 0.5 ? '❤' : '💗'; 
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 6 + "s"; // Slower for mobile elegance
    heart.style.fontSize = Math.random() * 10 + 12 + "px"; 
    
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 8000);
};

const interval = setInterval(updateCountdown, 1000);
// Generate a heart every 800ms to avoid overwhelming mobile CPUs
setInterval(createHeart, 800); 
updateCountdown();
