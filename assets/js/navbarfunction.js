checkLoginStatus();

function checkLoginStatus() {
  let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
  if (keyU == undefined || keyU[0] == "") {
    document.getElementById("log").style.display = "block";
    document.getElementById("profileIMG").style.display = "none";
  } else {
    document.getElementById("log").style.display = "none";
    document.getElementById("profileIMG").style.display = "block";
  }
}
function DisplayPrfileDiv() {
  document.getElementById("profilePopDiv").style.display = "block";
  setTimeout(() => {
    document.getElementById("profilePopDiv").style.display = "none";
  }, 3000);
}
function LogOutUserFromProfile() {
  localStorage.clear();

  window.open("index.html", "_self");
  checkLoginStatus();
}
function redirecttoProfilePage() {
  document.getElementById("profilePopDiv").style.display = "none";
  window.open("./profilepage.html", "_self");
}
let flag1 = localStorage.getItem("primeOrNotUser699");
let flag2 = localStorage.getItem("primeOrNotUser499");
let buyBtnCondition = document.getElementById("buy");
if (flag1 == "true") {
  document.getElementById("profileIMG").style.color = "goldenrod";
  buyBtnCondition.innerHTML = `<i class="fa-solid fa-crown"></i> PREMIUM`;
  buyBtnCondition.style.backgroundColor = "goldenrod";
  buyBtnCondition.disabled = true;
} else if (flag2 == "true") {
  buyBtnCondition.innerHTML = `<i class="fa-solid fa-crown"></i> UPGRADE PLAN`;
} else {
  buyBtnCondition.innerHTML = `<i class="fa-solid fa-crown"></i> BUY PLAN`;
}
