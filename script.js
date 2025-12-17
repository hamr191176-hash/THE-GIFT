const correctPassword = "1234";

function unlockGift() {
    const pass = document.getElementById("password").value;
    const music = document.getElementById("bgMusic");

    // محاولة تشغيل الصوت (يجب أن يتم داخل حدث النقر)
    music.play().then(() => {
        music.volume = 0.5;
    }).catch(err => console.log("خطأ في تشغيل الصوت: ", err));

    if (pass === correctPassword) {
        document.getElementById("login-ui").classList.add("hidden");
        document.getElementById("gift-scene").classList.remove("hidden");

        setTimeout(() => {
            document.getElementById("lid").classList.add("open-lid");
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }, 500);
    } else {
        document.getElementById("error").textContent = "كلمة السر خطأ!";
    }
}

function resetPage() {
    location.reload(); // إعادة تحميل الصفحة للعودة للبداية
}
