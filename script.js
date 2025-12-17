const correctPassword = "1234";

function unlockGift() {
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");
    const music = document.getElementById("bgMusic");
    const btnText = document.querySelector(".btn-text");
    const loader = document.querySelector(".loader");

    // تشغيل الصوت فور الضغط
    music.play().then(() => { music.volume = 0.5; }).catch(e => console.log("الصوت مفعل"));

    if (pass === correctPassword) {
        btnText.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
            document.getElementById("ui-content").classList.add("hidden");
            document.getElementById("gift-scene").classList.remove("hidden");
            
            setTimeout(() => {
                document.getElementById("lid").classList.add("open-lid");
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            }, 500);
        }, 1300);
    } else {
        error.textContent = "❌ كلمة السر غير صحيحة";
    }
}
