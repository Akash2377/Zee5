checkLoginStatus();

function checkLoginStatus() {
  let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
  if (keyU == undefined || keyU[0] == "") {
    document.getElementById("log").style.display = "block";
    document.getElementById("ParaOfuserStatus").style.display = "none";
    BtnContinue.disabled = true;
    BtnContinue.style.cursor = "not-allowed";
  } else {
    document.getElementById("log").style.display = "none";
    document.getElementById("ParaOfuserStatus").style.display = "block";
    document.getElementById("NameOfUser").innerText = keyU[2];
  }
}

let price699Div = document.getElementById("box2");
let price499Div = document.getElementById("box7");
let BtnContinue = document.getElementById("btn");
let inputValueofPromo = document.getElementById("promocodeInput");
let promoCodeDiv = document.getElementById("promocodeDiv");
let changeParaOfInput = document.getElementById("CancelPromoCode");
let paraOfConformation = document.getElementById("promocodeValuAcceptorreject");
function Selceted699Plan() {
  promoCodeDiv.style.display = "none";
  inputValueofPromo.value = "";
  price699Div.style.backgroundColor = "hsl(318deg 62% 94%)";
  price499Div.style.backgroundColor = "white";
  price699Div.style.border = "1px dashed hsl(318deg 62% 94%)";
  price499Div.style.border = "1px dashed gray";
  BtnContinue.disabled = false;
  BtnContinue.style.cursor = "pointer";
  BtnContinue.innerText = "Continue With ₹699";
}
function selected499plan() {
  promoCodeDiv.style.display = "none";
  inputValueofPromo.value = "";

  price499Div.style.backgroundColor = "hsl(318deg 62% 94%)";
  price699Div.style.backgroundColor = "white";
  price499Div.style.border = "1px dashed hsl(318deg 62% 94%)";
  price699Div.style.border = "1px dashed gray";
  BtnContinue.disabled = false;
  BtnContinue.style.cursor = "pointer";
  BtnContinue.innerText = "Continue With ₹499";
}
function changeDisplay() {
  promoCodeDiv.style.display = "flex";
  changeParaOfInput.addEventListener("click", changeDisplayNone);
}
function changeDisplayNone() {
  promoCodeDiv.style.display = "none";
}
inputValueofPromo.addEventListener("keyup", checkPromoIsValid);
function checkPromoIsValid() {
  paraOfConformation.style.display = "none";
  changeParaOfInput.innerText = "Cancel";
  changeParaOfInput.addEventListener("click", changeDisplayNone);
  if (inputValueofPromo.value.length > 0) {
    changeParaOfInput.innerText = "Apply";
    changeParaOfInput.removeEventListener("click", changeDisplayNone);
    changeParaOfInput.addEventListener("click", CheckPromoCode);
  }
}
function CheckPromoCode() {
  console.log(inputValueofPromo.value);
  paraOfConformation.style.display = "none";
  if (inputValueofPromo.value == "Masai20") {
    let btnCurrentValue = BtnContinue.innerText;
    console.log(btnCurrentValue);
    if (btnCurrentValue == "Continue With ₹699") {
      paraOfConformation.style.display = "block";
      paraOfConformation.innerHTML =
        "Congratulations for 20% Discount &#129321;";
      BtnContinue.innerText = "Continue With ₹489";
      inputValueofPromo.value = "";
    } else {
      paraOfConformation.style.display = "block";
      paraOfConformation.innerHTML =
        "Congratulations for 20% Discount &#129321;";
      BtnContinue.innerText = "Continue With ₹349";
      inputValueofPromo.value = "";
    }
  } else {
    paraOfConformation.style.display = "block";
    paraOfConformation.innerHTML = "Code is Invalid &#129488;";
  }
}
BtnContinue.addEventListener("click", ContinueToBuyThePremium);
function ContinueToBuyThePremium() {
  let btnCurrentValue = BtnContinue.innerText;
  if (btnCurrentValue == "Continue With ₹699") {
    localStorage.setItem("btnValue", 699);
  } else if (btnCurrentValue == "Continue With ₹499") {
    localStorage.setItem("btnValue", 499);
  } else if (btnCurrentValue == "Continue With ₹489") {
    localStorage.setItem("btnValue", 489);
  } else if (btnCurrentValue == "Continue With ₹349") {
    localStorage.setItem("btnValue", 349);
  }
  window.open("./payment.html", "_self");
}
