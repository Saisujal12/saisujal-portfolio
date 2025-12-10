const openContactBtn = document.getElementById("openContact");
const contactBox = document.getElementById("contactme");
const sendBtn = document.getElementById("sendBtn");
const closeBtn = document.getElementById("btn-close");
const overlay = document.getElementById("overlay");
const body = document.body;

// OPEN popup
openContactBtn.addEventListener("click", function (e) {
    e.preventDefault();

    contactBox.style.display = "block";
    contactBox.classList.remove("animate-out");
    contactBox.classList.add("animate-in");
    overlay.style.display = "block";
    
});

// SEND button
sendBtn.addEventListener("click", function () {
    const inputs = contactBox.querySelectorAll("input");

    if ([...inputs].some(i => i.value.trim() === "")) {
        alert("❌ Please fill all fields");
        return; // ✅ KEEP popup open
    }

    alert("✅ Message sent successfully!");

    inputs.forEach(i => i.value = "");
    closePopup();
});

// CLOSE button
closeBtn.addEventListener("click", closePopup);

// OVERLAY CLICK
overlay.addEventListener("click", closePopup);

// CLOSE FUNCTION
function closePopup() {
    contactBox.classList.remove("animate-in");
    contactBox.classList.add("animate-out");

    setTimeout(() => {
        contactBox.style.display = "none";
        overlay.style.display = "none";
        contactBox.classList.remove("animate-out");
    }, 500);
}
