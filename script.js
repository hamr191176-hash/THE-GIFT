const correctPassword = "1234";

function unlockGift() {
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");
    const music = document.getElementById("bgMusic");
    const btnText = document.querySelector(".btn-text");
    const loader = document.querySelector(".loader");

    // محاولة تشغيل الصوت (تفعيل بمجرد الضغط)
    music.play().then(() => {
        music.volume = 0.5;
    }).catch(err => {
        console.log("الطلب يتطلب تفاعل المستخدم أولاً");
    });

    if (pass === correctPassword) {
        btnText.style.display = "none";
        loader.style.display = "block";

        setTimeout(() => {
            // إخفاء واجهة الدخول وإظهار الهدية
            document.getElementById("ui-content").classList.add("hidden");
            document.getElementById("gift-scene").classList.remove("hidden");
            
            // فتح الغطاء بعد ثانية
            setTimeout(() => {
                document.getElementById("lid").classList.add("open-lid");
                
                // إطلاق القصاصات الملونة
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }, 1000);

        }, 1500);
    } else {
        error.textContent = "كلمة السر غلط.. جرب تاني!";
        error.style.color = "#ff4d4d";
    }
}
