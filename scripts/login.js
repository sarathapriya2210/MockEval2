document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "empher@gmail.com" && password === "empher@123") {
      alert("Login Success, you are redirecting to quiz page");
      window.location.href = "quiz.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });