
  
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
    });
  });
  
  // Simple form validation for the buttons and thank you alert for submitting
  const form = document.getElementById("trip-form");
  
  if (form) {
    form.addEventListener("submit", function(event) {
      const destination = document.getElementById("destination").value.trim();
      const name = document.getElementById("name").value.trim();
  
      if (destination === "" || name === "") {
        alert("Please fill out all fields.");
        event.preventDefault(); // prevents the form submission
      } else {
        alert("Thanks, " + name + "! Let's start planning your trip to " + destination + ", Happy Travels.");
  
        // ✅ Dynamically place text on page
        document.getElementById("confirmation-message").textContent =
          "Thanks, " + name + "! Have a great trip to " + destination;
  
        event.preventDefault(); // Optional: prevents form from reloading page
      }
    });
  }
  