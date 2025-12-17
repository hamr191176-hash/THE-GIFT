const correctPassword = "1234";      // غير كلمة السر
const personName = "اسم_الشخص";     // ✨ غير الاسم هنا

function openGift() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");
  const btn = document.getElementById("giftBtn");
  const text = btn.querySelector(".btn-text");
  const loader = btn.querySelector(".loader");
  const music = document.getElementById("bgMusic");

  error.textContent = "";
  music.volume = 0.35;
  music.play();

  text.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
    if (pass === correctPassword) {
      document.getElementById("card").innerHTML = `
        <div class="gift-box">
          <div class="lid"></div>
        </div>
        <h1>🎉 مفاجأة يا ${personName}</h1>
        <p style="color:#facc15;font-size:18px">
          الهدية دي معمولة مخصوص ليك ❤️
        </p>
      `;
    } else {
      loader.style.display = "none";
      text.style.display = "inline";
      error.textContent = "❌ كلمة السر غير صحيحة";
    }
  }, 1300);
}
