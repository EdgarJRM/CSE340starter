const pswdBtn = document.querySelector("#pswdBtn");
pswdBtn.addEventListener("click", function() {
  const pswdInput = document.getElementById("account_password");
  const type = pswdInput.getAttribute("type");
  console.log("EXITO")
  if (type == "password") {
    pswdInput.setAttribute("type", "text");
    pswdBtn.innerHTML = "Hide Password";
  } else {
    pswdInput.setAttribute("type", "password");
    pswdBtn.innerHTML = "Show Password";
  }
});