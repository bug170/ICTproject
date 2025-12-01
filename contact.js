document.querySelectorAll(".faq").forEach((faq) => {
  faq.addEventListener("click", () => {
    let answer = faq.querySelector(".faq-answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if (name === "") {
      error.textContent = "Name cannot be empty.";
      return;
    }

    if (email === "" || !email.includes("@")) {
      error.textContent = "Enter a valid email.";
      return;
    }

    if (message === "") {
      error.textContent = "Message cannot be empty.";
      return;
    }

    error.textContent = "";
    alert("Message sent successfully!");
  });
