const correctPassword = "12234";      // كلمة السر
const personName = "عمرو";          // اسم الشخص

function openGift() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");
  const btn = document.getElementById("giftBtn");
  const text = btn.querySelector(".btn-text");
  const loader = btn.querySelector(".loader");
  const music = document.getElementById("bgMusic");

  // تشغيل الموسيقى فور الضغط
  music.volume = 0.4;
  music.play().catch(e => console.log("تحتاج لتفاعل المستخدم أولاً"));

  error.textContent = "";
  text.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
    if (pass === correctPassword) {
      // تأثير القصاصات الملونة (Confetti)
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });

      document.getElementById("card").innerHTML = `
        <div class="gift-box">
          <div class="lid"></div>
        </div>
        <h1 style="color:#fff">🎉 مفاجأة يا ${personName}</h1>
        <p style="color:#facc15; font-size:20px; font-weight:bold;">
          الهدية دي معمولة مخصوص ليك ❤️
        </p>
        <button onclick="location.reload()" style="background:#334155; margin-top:20px;">رجوع</button>
      `;
    } else {
      loader.style.display = "none";
      text.style.display = "inline";
      error.textContent = "❌ كلمة السر غير صحيحة يا بطل";
    }
  }, 1500);
}

