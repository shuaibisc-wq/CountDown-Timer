const targetDate = new Date("June 9, 2026 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-container").innerHTML = "<h1>Happy Birthday!</h1>";
    }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately so it doesn't wait 1 second to show numbers
