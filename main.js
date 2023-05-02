window.onload = function() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
  const submitBtn = document.getElementById("password-confirm");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (passwordInput.value === "Blackbird") {
      window.location.href = "about.html";
    } else {
      passwordError.textContent = 'Incorrect password';
      passwordInput.value = '';
    }
  });
};