const openContactBtn = document.getElementById("openContact");
  const contactBox = document.getElementById("contactme");
  const closeBtn = document.getElementById("btn-close");
  const overlay = document.getElementById("overlay");
  const contactForm = document.getElementById("contactForm");

  // OPEN popup
  openContactBtn.addEventListener("click", function (e) {
    e.preventDefault();
    contactBox.style.display = "block";
    contactBox.classList.remove("animate-out");
    contactBox.classList.add("animate-in");
    overlay.style.display = "block";
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


  contactForm.addEventListener("submit", function(event) {
   
    const inputs = contactForm.querySelectorAll("input, textarea");
    const empty = [...inputs].some(input => input.value.trim() === "");

    if (empty) {
      event.preventDefault(); 
      alert("❌ Please fill all fields");
      return;
    }

   
  });
