var form = document.getElementById("form");
var btn = document.getElementById("btn");

let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
document.getElementById("NameOfUser").innerText = keyU[2];
let pricePurchassed = localStorage.getItem("btnValue");
console.log(pricePurchassed);
document.getElementById("PriceOfContent").innerText = pricePurchassed;
if (pricePurchassed == "699" || pricePurchassed == "489") {
  document.getElementById("totalMonth").innerText = "12";
} else if (pricePurchassed == "499" || pricePurchassed == "349") {
  document.getElementById("totalMonth").innerText = "3";
}
var form = document.getElementById("form");
var btn = document.getElementById("btn");
document.getElementById("OtpOfPayment").style.display = "none";
btn.removeEventListener("click", continueIfOTPIs);
btn.addEventListener("click", showOTPSection);
function showOTPSection(event) {
  event.preventDefault();
  var cardNumber = document.getElementById("cardnumber").value;
  var ExpiryDate = document.getElementById("ExpiryDate").value;
  var Cvv = document.getElementById("Cvv").value;

  if (cardNumber == "" && ExpiryDate == "" && Cvv == "") {
    // alert("Please fill all the fields");
    swal("Please fill all the fields", "Error", "error");
  } else {
    // alert("OTP = 3568");
    swal("OTP = 3568", "Your OTP", "info");
    document.getElementById("OtpOfPayment").style.display = "block";
    btn.removeEventListener("click", showOTPSection);
    btn.addEventListener("click", continueIfOTPIs);
  }
}

function continueIfOTPIs() {
  let otpEnterd = document.getElementById("OtpOfPayment").value;
  if (otpEnterd == "3568") {
    if (pricePurchassed == "699" || pricePurchassed == "489") {
      let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
      fetch(`https://jesonserver.onrender.com/userloginDetails/${keyU[1]}`, {
        method: "PATCH",
        body: JSON.stringify({
          plan699: true,
        }),
        headers: { "content-type": "application/json" },
      });
      setTimeout(function () {
        window.open("./paymentsuccessful.html", "_self");
      }, 2000);
    } else {
      let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
      fetch(`https://jesonserver.onrender.com/userloginDetails/${keyU[1]}`, {
        method: "PATCH",
        body: JSON.stringify({
          plan499: true,
        }),
        headers: { "content-type": "application/json" },
      });
      setTimeout(function () {
        window.open("./paymentsuccessful.html", "_self");
      }, 2000);
    }
  } else {
    // alert("Wrong OTP");
    swal("Wrong OTP", "Please Enter Valid OTP", "info");
  }
}
