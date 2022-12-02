document
  .getElementById("InputMobileOrEmialSignIn")
  .addEventListener("keyup", checkNoOrEmail);

let loginBTNElement = document.getElementById("LoginBTNUser");

function checkNoOrEmail() {
  loginBTNElement.innerText = "Login";
  loginBTNElement.disabled = true;
  loginBTNElement.style.backgroundColor = "transparent";
  loginBTNElement.style.cursor = "not-allowed";
  loginBTNElement.style.color = "#ffffff80";
  document.getElementById("InputMobileOrEmialSignIn").style.paddingLeft = "0px";
  document.getElementById("otpDivInput").style.display = "none";
  document.getElementById("forgotPasID").style.display = "block";
  let valueofInput = document.getElementById("InputMobileOrEmialSignIn").value;

  if (valueofInput.includes("@")) {
    document.getElementById("PasswordOnEmail").style.display = "flex";
    document.getElementById("countrySelectTagNumber").style.display = "block";
    document.getElementById("countrySelectTagNumber").style.display = "none";
  } else if (!valueofInput.includes("@") && onlyNumbers(valueofInput)) {
    document.getElementById("PasswordOnEmail").style.display = "none";
    document.getElementById("countrySelectTagNumber").style.display = "block";
    document.getElementById("InputMobileOrEmialSignIn").style.paddingLeft =
      "65px";

    if (valueofInput.length == 10) {
      loginBTNElement.style.backgroundColor = "rgb(130 48 198)";
      loginBTNElement.innerText = "Send OTP";
      loginBTNElement.style.cursor = "pointer";
      loginBTNElement.style.color = "white";
      loginBTNElement.disabled = false;
    }
    loginBTNElement.removeEventListener("click", checkDataWithServerEmail);
    loginBTNElement.removeEventListener("click", loginUserIfOTP);
    loginBTNElement.addEventListener("click", checkDataWithServerNumber);
  } else if (!valueofInput.includes("@")) {
    document.getElementById("PasswordOnEmail").style.display = "none";
    document.getElementById("countrySelectTagNumber").style.display = "none";
  }
}
document
  .getElementById("PasswordSignIn")
  .addEventListener("keyup", passwordisOkOrNot);
function passwordisOkOrNot() {
  let passwordLengthtag = document.getElementById("PasswordSignIn").value;
  loginBTNElement.style.backgroundColor = "transparent";
  loginBTNElement.style.cursor = "not-allowed";
  loginBTNElement.style.color = "#ffffff80";
  loginBTNElement.disabled = true;
  if (passwordLengthtag.length >= 8) {
    loginBTNElement.disabled = false;
    loginBTNElement.style.backgroundColor = "rgb(130 48 198)";
    loginBTNElement.style.cursor = "pointer";
    loginBTNElement.style.color = "white";
    loginBTNElement.removeEventListener("click", checkDataWithServerNumber);
    loginBTNElement.removeEventListener("click", loginUserIfOTP);
    loginBTNElement.addEventListener("click", checkDataWithServerEmail);
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
  if (flag.length != 0) {
    let otpalert = Math.floor(Math.random() * 1000 + 1000);
    localStorage.setItem("OTPNew", otpalert);
    swal(`${otpalert}`, "Your OTP", "info");
    loginBTNElement.innerText = "Verify OTP";
    document.getElementById("otpDivInput").style.display = "flex";
    document.getElementById("forgotPasID").style.display = "none";
    loginBTNElement.removeEventListener("click", checkDataWithServerNumber);
    loginBTNElement.removeEventListener("click", checkDataWithServerEmail);
    loginBTNElement.addEventListener("click", loginUserIfOTP);
  } else {
    swal("Number Not Registered", "Please Register Your Number ", "error");
  }
}
async function loginUserIfOTP() {
  let mobileNumber = document.getElementById("InputMobileOrEmialSignIn").value;
  let OTP = document.getElementById("OTPofNumber").value;
  let OTPLocal = localStorage.getItem("OTPNew");

  try {
    let url = "https://jesonserver.onrender.com/userloginDetails";
    let res = await fetch(url);
    let data = await res.json();

    if (OTP == OTPLocal) {
      for (var i = 0; i < data.length; i++) {
        if (mobileNumber == data[i].phone) {
          let arrUser = [];
          arrUser.push(data[i].userLoginId);
          arrUser.push(data[i].id);
          arrUser.push(data[i].name);
          arrUser.push(data[i].plan699);
          arrUser.push(data[i].plan499);
          localStorage.setItem("KeyOfLogin", JSON.stringify(arrUser));
          if (data[i].plan699) {
            localStorage.setItem("primeOrNotUser699", true);
          } else if (data[i].plan499) {
            localStorage.setItem("primeOrNotUser499", true);
          } else {
            localStorage.setItem("primeOrNotUser699", false);
            localStorage.setItem("primeOrNotUser499", false);
          }
        }
      }
      swal("Welcome To Zee5!", "Login Successfully", "success");

      setTimeout(function () {
        window.open("../../index.html", "_self");
      }, 3000);
    } else {
      swal("Wrong OTP", "Please Enter valid OTP", "error");
    }
  } catch (error) {
    console.log(error);
  }
}
// ===============================Login with number end================================

// ===============================Login with email================================
function checkDataWithServerEmail() {
  getDataFromServer();
  async function getDataFromServer() {
    try {
      let url = "https://jesonserver.onrender.com/userloginDetails";
      let res = await fetch(url);
      let data = await res.json();
      checkemailData(data);
    } catch (error) {
      console.log(error);
    }
  }
}
function checkemailData(data) {
  let emailUser = document.getElementById("InputMobileOrEmialSignIn").value;
  let passwordUser = document.getElementById("PasswordSignIn").value;
  var flag = data.filter(function (el) {
    return el.email === emailUser && el.password === passwordUser;
  });
  if (flag.length != 0) {
    for (var i = 0; i < data.length; i++) {
      if (emailUser == data[i].email) {
        let arrUser = [];
        arrUser.push(data[i].userLoginId);
        arrUser.push(data[i].id);
        arrUser.push(data[i].name);
        arrUser.push(data[i].plan699);
        arrUser.push(data[i].plan499);
        localStorage.setItem("KeyOfLogin", JSON.stringify(arrUser));
        if (data[i].plan699) {
          localStorage.setItem("primeOrNotUser699", true);
        } else if (data[i].plan499) {
          localStorage.setItem("primeOrNotUser499", true);
        } else {
          localStorage.setItem("primeOrNotUser699", false);
          localStorage.setItem("primeOrNotUser499", false);
        }
      }
    }
    swal("Login Successfully", "Welcome", "success");
    setTimeout(function () {
      window.open("../../index.html", "_self");
    }, 3000);
  } else {
    swal("wrong credentials", "Please valid Info", "success");
  }
}
// ===============================Login with email end================================

// ===============================password Visibility =============================
function myFunction1() {
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
function myFunction2() {
  var x = document.getElementById("PasswordSignIn");
  var y = document.getElementById("eye2");
  if (x.type === "password") {
    x.type = "text";
    y.src = "../../assets/img/eye-solid.png";
  } else {
    x.type = "password";
    y.src = "../../assets/img/eye-slash-solid.png";
  }
}
// ===============================password Visibility end =============================
