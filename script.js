// *** مهم جداً: قم بتغيير كلمة السر هنا إلى ما تريد ***
const correctPassword = "AML"; // غير هذه الكلمة!

function checkPassword() {
    const enteredPassword = document.getElementById('passwordInput').value;
    const messageElement = document.getElementById('message');
    
    if (enteredPassword === correctPassword) {
        // إذا كانت كلمة السر صحيحة:
        document.getElementById('lockScreen').classList.add('hidden');
        document.getElementById('giftContent').classList.remove('hidden');
        messageElement.textContent = "";
        
        // ** ملاحظة: يمكنك هنا تشغيل الموسيقى تلقائياً إذا أضفت كودها في الـ HTML
        
    } else {
        // إذا كانت كلمة السر خاطئة:
        messageElement.textContent = "كلمة السر خاطئة. يرجى المحاولة مرة أخرى.";
        document.getElementById('passwordInput').value = ""; // مسح الحقل
    }
}

function startJourney() {
    alert("هنا ستبدأ صفحة الذكريات والصور والفيديوهات... يمكنك إضافتها في ملف الـ HTML!");
    // هنا يمكنك برمجة النقل إلى صفحة أخرى أو إظهار أقسام جديدة في نفس الصفحة.
}
