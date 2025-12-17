const correctPassword = "1234";
const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // ضع أسماء صورها هنا
let currentImgIndex = 0;

function unlockGift() {
    const pass = document.getElementById("password").value;
    const music1 = document.getElementById("bgMusic1");

    if (pass === correctPassword) {
        music1.play();
        document.getElementById("login-card").classList.add("hidden");
        document.getElementById("gift-card").classList.remove("hidden");
        
        setTimeout(() => {
            document.getElementById("lid").classList.add("open-lid");
            confetti({ particleCount: 150, spread: 70 });
        }, 500);
    } else {
        document.getElementById("error").textContent = "كلمة السر خطأ! ❌";
    }
}

function showGallery() {
    const music1 = document.getElementById("bgMusic1");
    const music2 = document.getElementById("bgMusic2");

    // تبديل الموسيقى
    music1.pause();
    music2.play().catch(() => console.log("أضف ملف الأغنية الثانية"));

    document.getElementById("gift-card").classList.add("hidden");
    document.getElementById("gallery-screen").classList.remove("hidden");

    // بدء تقليب الصور تلقائياً
    setInterval(changeImage, 3000);
}

function changeImage() {
    const imgElement = document.getElementById("main-img");
    currentImgIndex = (currentImgIndex + 1) % images.length;
    
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = images[currentImgIndex];
        imgElement.style.opacity = 1;
    }, 500);
}
