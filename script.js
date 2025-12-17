const correctPassword = "1234"; // ✨ غيرها براحتك

const toggle = document.getElementById("toggle");
const passwordInput = document.getElementById("password");

toggle.onclick = () => {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
};

function openGift() {
  const pass = passwordInput.value;
  const error = document.getElementById("error");

  if (pass === correctPassword) {
    document.getElementById("card").innerHTML = `
      <div class="gift-icon">🎉</div>
      <h1>مبروك 🎊</h1>
      <p>دي رسالتك الخاصة 💌</p>
      <p style="color:#facc15;font-size:18px">
        انت شخص مميز جدًا ❤️
      </p>
    `;
  } else {
    error.textContent = "❌ كلمة السر غير صحيحة";
  }
}
