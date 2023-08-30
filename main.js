const userEmail = document.querySelector("#email");
const errorLabel = document.querySelector("#error");
const form = document.querySelector(".form");
const dismissBTN = document.querySelector(".btn");
const subscription = document.querySelector(".subscription");
const response = document.querySelector(".response");

// VALIDATION FOR EMAIL
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    userEmail.value
  );
  if (!userEmail.value == "" && isValid) {
    response.style.display = "flex";
    subscription.style.display = "none";
    errorLabel.style.display = "none";
    userEmail.classList.remove("errorInput");
  } else {
    errorLabel.style.display = "block";
    response.style.display = "none";
    userEmail.classList.add("errorInput");
  }
  
});
if(window.location.reload){
    userEmail.value = "";
  }
dismissBTN.onclick = function () {
  userEmail.value = "";
  response.style.display = "none";
  subscription.style.display = "flex";
};
