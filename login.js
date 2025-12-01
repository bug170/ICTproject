document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value.trim();
  let pass = document.getElementById("loginPass").value.trim();

  let ok = true;

  if (!email.includes("@")) {
    document.getElementById("loginEmailErr").textContent =
      "Enter a valid email";
    ok = false;
  } else {
    document.getElementById("loginEmailErr").textContent = "";
  }

  if (pass.length < 6) {
    document.getElementById("loginPassErr").textContent = "Password required";
    ok = false;
  } else {
    document.getElementById("loginPassErr").textContent = "";
  }

  if (ok) {
    alert("Thank you for visiting our site!");
  }
});
