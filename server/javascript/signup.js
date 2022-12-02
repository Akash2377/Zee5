document
  .getElementById("InputMobileOrEmialSignIn")
  .addEventListener("keyup", checkNoOrEmail);

let loginBTNElement = document.getElementById("LoginBTNUser");

function checkNoOrEmail() {
  loginBTNElement.innerText = "Send OTP";
  loginBTNElement.disabled = true;
  loginBTNElement.style.backgroundColor = "transparent";
  loginBTNElement.style.cursor = "not-allowed";
  loginBTNElement.style.color = "#ffffff80";
  document.getElementById("InputMobileOrEmialSignIn").style.paddingLeft = "0px";
  document.getElementById("otpDivInput").style.display = "none";

  let valueofInput = document.getElementById("InputMobileOrEmialSignIn").value;
  if (onlyNumbers(valueofInput)) {
    document.getElementById("countrySelectTagNumber").style.display = "block";
    document.getElementById("InputMobileOrEmialSignIn").style.paddingLeft =
      "65px";

    if (valueofInput.length == 10) {
      loginBTNElement.style.backgroundColor = "rgb(130 48 198)";
      loginBTNElement.style.cursor = "pointer";
      loginBTNElement.style.color = "white";
      loginBTNElement.disabled = false;
    }
    loginBTNElement.removeEventListener("click", loginUserIfOTP);
    loginBTNElement.addEventListener("click", checkDataWithServerNumber);
  }
}
function onlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}
// ===============================Login with number================================
function checkDataWithServerNumber() {
  getDataFromServer();
  async function getDataFromServer() {
    try {
      let url = "https://jesonserver.onrender.com/userloginDetails";
      let res = await fetch(url);
      let data = await res.json();
      checkPhonenumber(data);
    } catch (error) {
      console.log(error);
    }
  }
}

function checkPhonenumber(data) {
  let mobileNumber = document.getElementById("InputMobileOrEmialSignIn").value;
  var flag = data.filter(function (el) {
    return el.phone === mobileNumber;
  });
  if (flag.length == 0) {
    loginBTNElement.innerText = "Verify";
    let otpalert = Math.floor(Math.random() * 1000 + 1000);
    localStorage.setItem("OTPNew", otpalert);
    swal(`${otpalert}`, "Your OTP", "info");
    document.getElementById("otpDivInput").style.display = "flex";
    loginBTNElement.removeEventListener("click", checkDataWithServerNumber);
    loginBTNElement.addEventListener("click", loginUserIfOTP);
  } else {
    swal(
      "Phone number is already verified",
      "Please Enter anotherNumber ",
      "error"
    );
  }
}
function loginUserIfOTP() {
  let mobileNumber = document.getElementById("InputMobileOrEmialSignIn").value;
  let OTP = document.getElementById("OTPofNumber").value;
  let OTPLocal = localStorage.getItem("OTPNew");
  if (OTP == OTPLocal) {
    swal("SignUp Successfully", "Welcome, Please Login Again", "success");
    setTimeout(function () {
      fetch("https://jesonserver.onrender.com/userloginDetails", {
        method: "POST",
        body: JSON.stringify({
          phone: mobileNumber,
          userLoginId: Date.now(),
          plan699: false,
          plan499: false,
          watchList: [],
        }),
        headers: { "Content-Type": "application/json" },
      });
      setTimeout(() => {
        window.open("./login.html", "_self");
      }, 2000);
    }, 2000);
  } else {
    swal("Wrong OTP", "Please Enter valid OTP ", "error");
  }
}
// ===============================Login with number end================================

// ===============================password Visibility =============================
function myFunction() {
  var x = document.getElementById("OTPofNumber");
  var y = document.getElementById("eye1");
  if (x.type === "password") {
    x.type = "text";
    y.src = "../../assets/img/eye-solid.png";
  } else {
    x.type = "password";
    y.src = "../../assets/img/eye-slash-solid.png";
  }
}
// ===============================password Visibility end =============================
