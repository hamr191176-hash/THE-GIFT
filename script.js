const correctPassword = "1234";

function unlockGift() {
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");
    const music = document.getElementById("bgMusic");
    const btnText = document.querySelector(".btn-text");
    const loader = document.querySelector(".loader");

    // تشغيل الأغنية التي أرسلتها
    music.volume = 0.6;
    music.play().catch(err => console.log("تفاعل المستخدم مطلوب للصوت"));

    if (pass === correctPassword) {
        btnText.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
            document.getElementById("ui-content").classList.add("hidden");
            document.getElementById("gift-scene").classList.remove("hidden");
            
            // فتح الصندوق والاحتفال
            setTimeout(() => {
                document.getElementById("lid").classList.add("open-lid");
                
                // تأثير القصاصات الملونة
                var duration = 5 * 1000;
                var animationEnd = Date.now() + duration;
                var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

                function randomInRange(min, max) { return Math.random() * (max - min) + min; }

                var interval = setInterval(function() {
                    var timeLeft = animationEnd - Date.now();
                    if (timeLeft <= 0) return clearInterval(interval);
                    var particleCount = 50 * (timeLeft / duration);
                    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                }, 250);
            }, 800);

        }, 1500);
    } else {
        error.textContent = "كلمة السر غلط.. حاول تاني يا بطل 🌹";
        error.style.color = "#f87171";
    }
}
