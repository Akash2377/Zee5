// ==============================Display Block and None =================
function noneAndBlock(val, valS) {
  document.getElementById("userProfileSectionUnder").style.display = "none";
  document.getElementById("userProfileUpdate").style.display = "none";
  document.getElementById("changePassword").style.display = "none";
  document.getElementById("userWatchList").style.display = "none";
  document.getElementById("userSubscription").style.display = "none";
  document.getElementById("userRentals").style.display = "none";
  checkWatchListData();
  document.getElementById("userTransactions").style.display = "none";
  document.getElementById(val).style.display = "block";
  let arrOfButtonID = [
    document.getElementById("MyProfile"),
    document.getElementById("MyWatchlist"),
    document.getElementById("Subscription"),
    document.getElementById("MyRentals"),
    document.getElementById("MyTransation"),
  ];
  arrOfButtonID.forEach(function (ele) {
    ele.onmouseover = function () {
      ele.style.color = "white";
      ele.style.borderRight = "1px solid white";
      applystyletobutton(valS);
    };
    ele.onmouseleave = function () {
      ele.style.color = "#828282";
      ele.style.backgroundColor = "transparent";
      ele.style.borderRight = "none";
      ele.style.fontSize = "18px";
      ele.style.fontWeight = "500";
      applystyletobutton(valS);
    };

    ele.style.color = "#828282";
    ele.style.backgroundColor = "transparent";
    ele.style.borderRight = "none";
    ele.style.fontSize = "18px";
    ele.style.fontWeight = "500";
  });
  let velSElement = document.getElementById(valS);
  velSElement.style.color = "white";
  velSElement.style.borderRight = "1px solid white";
  velSElement.style.backgroundColor = "#0f0617";
  velSElement.style.fontSize = "20px";
  velSElement.style.fontWeight = "700";
}
function applystyletobutton(valS) {
  let velSElement = document.getElementById(valS);
  velSElement.style.color = "white";
  velSElement.style.borderRight = "1px solid white";
  velSElement.style.backgroundColor = "#0f0617";
  velSElement.style.fontSize = "20px";
  velSElement.style.fontWeight = "700";
}
// ==============================Display Block and None end===============
// ==============================check login status ======================
checkLoginStatus();

function checkLoginStatus() {
  let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
  if (keyU == undefined || keyU[0] == "") {
    window.open("../../index.html", "_self");
  }
}
// ==============================check login status end ====================
// =============================fetch DAta from server =====================
onProfileClick();

function onProfileClick() {
  getDataFromServer();
  async function getDataFromServer() {
    try {
      let url = "https://jesonserver.onrender.com/userloginDetails";
      let res = await fetch(url);
      let data = await res.json();
      ShowDataOnProfile(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
// =============================fetch DAta from server end==================
// =============================Show data On profile========================

function ShowDataOnProfile(data) {
  var keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
  for (var i = 0; i < data.length; i++) {
    if (keyU[0] == data[i].userLoginId) {
      let arrUser = [];
      arrUser.push(data[i].userLoginId);
      arrUser.push(data[i].id);
      arrUser.push(data[i].name);
      arrUser.push(data[i].plan699);
      arrUser.push(data[i].plan499);
      localStorage.setItem("KeyOfLogin", JSON.stringify(arrUser));
      let initialCharVar = "GU";
      if (data[i].name) {
        initialCharVar = "";
        let initialChar = data[i].name.split(" ");
        if (initialChar.length == 1) {
          initialCharVar = initialChar[0].slice(0, 2);
        } else {
          initialChar.forEach((element) => {
            initialCharVar += element[0];
          });
        }
      }
      if (data[i].plan699) {
        localStorage.setItem("primeOrNotUser699", true);
      } else if (data[i].plan499) {
        localStorage.setItem("primeOrNotUser499", true);
      } else {
        localStorage.setItem("primeOrNotUser699", false);
        localStorage.setItem("primeOrNotUser499", false);
      }
      let planNotactive = document.getElementById("imgOfERRORmySubsription");
      let plan499isactive = document.getElementById("RentalsPurchased499");
      let plan699isactive = document.getElementById("RentalsPurchased699");
      if (data[i].plan699) {
        planNotactive.style.display = "none";
        plan499isactive.style.display = "none";
        plan699isactive.style.display = "block";
        document.getElementById("informationDiv").style.display = "none";
        document.getElementById("informationDiv2").style.display = "flex";
      } else if (data[i].plan499) {
        planNotactive.style.display = "none";
        plan499isactive.style.display = "block";
        plan699isactive.style.display = "none";
        document.getElementById("informationDiv").style.display = "flex";
        document.getElementById("informationDiv2").style.display = "none";
      } else {
        planNotactive.style.display = "flex";
        plan499isactive.style.display = "none";
        plan699isactive.style.display = "none";
        document.getElementById("informationDiv").style.display = "none";
        document.getElementById("informationDiv2").style.display = "none";
      }
      document.getElementById("UserProfileInitials").innerText = initialCharVar;
      document.getElementById("userNameDisplay").innerText =
        data[i].name || "Guest";
      document.getElementById("userMobileNumberDisplay").innerText =
        data[i].phone;
      document.getElementById(
        "NumberUserUpdate"
      ).value = `+91-${data[i].phone}`;
    }
  }
}
// =============================Show data On profile end====================
// =============================change password js ====================
document
  .getElementById("NewPasswordCheck")
  .addEventListener("keyup", checkStrength);
let eye1 = document.getElementById("eye1");
let eye2 = document.getElementById("eye2");
let newPassword = document.getElementById("NewPasswordCheck");
let newPasswordcheck = document.getElementById("newPassConfirmIn");
function checkStrength() {
  eye1.style.display = "none";
  newPassword.style.width = "320px";
  if (newPassword.value.length > 0) {
    eye1.style.display = "block";
    newPassword.style.width = "500px";
  }
}
let changepassBTN = document.getElementById("updateUserPassBTN");
document
  .getElementById("newPassConfirmIn")
  .addEventListener("keyup", confirmNewPasswordfunc);
function confirmNewPasswordfunc() {
  eye2.style.display = "none";
  newPassConfirmIn.style.width = "300px";
  changepassBTN.disabled = true;
  changepassBTN.style.cursor = "not-allowed";
  changepassBTN.style.color = "hsla(0, 0%, 100%, 0.5)";
  changepassBTN.style.backgroundColor = "transparent";
  changepassBTN.style.border = "1px solid hsla(0, 0%, 100%, 0.5)";
  if (newPassConfirmIn.value.length > 0) {
    eye2.style.display = "block";
    newPassConfirmIn.style.width = "500px";
    if (
      newPassConfirmIn.value.length >= 8 &&
      newPassConfirmIn.value == newPassword.value &&
      newPassword.value.length >= 8
    ) {
      changepassBTN.disabled = false;
      changepassBTN.style.cursor = "pointer";
      changepassBTN.style.color = "white";
      changepassBTN.style.backgroundColor = "#8230c6";
      changepassBTN.style.border = "none";
    }
  }
}
function updatePasswordInJson() {
  let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));

  // alert("Password Updated Successfully");
  swal("Password Updated Successfully", "DONE", "success");
  setTimeout(function () {
    fetch(`https://jesonserver.onrender.com/userloginDetails/${keyU[1]}`, {
      method: "PATCH",
      body: JSON.stringify({
        password: newPasswordcheck.value,
      }),
      headers: { "content-type": "application/json" },
    });
  }, 3000);
}
// =============================change password end ====================
// ===============================password Visibility =============================
function myFunction1() {
  let x = document.getElementById("NewPasswordCheck");
  let y = document.getElementById("eye1");
  if (x.type === "password") {
    x.type = "text";
    y.src = "../../assets/img/eye-solid.png";
  } else {
    x.type = "password";
    y.src = "../../assets/img/eye-slash-solid.png";
  }
}
function myFunction2() {
  let x = document.getElementById("newPassConfirmIn");
  let y = document.getElementById("eye2");
  if (x.type === "password") {
    x.type = "text";
    y.src = "../../assets/img/eye-solid.png";
  } else {
    x.type = "password";
    y.src = "../../assets/img/eye-slash-solid.png";
  }
}
// ===============================password Visibility end =============================
// ===============================user profile update on json =============================
function UpdateUserProfileInJson() {
  let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
  setTimeout(function () {
    fetch(`https://jesonserver.onrender.com/userloginDetails/${keyU[1]}`, {
      method: "PATCH",
      body: JSON.stringify({
        email: document.getElementById("emailUserUpdate").value,
        name: document.getElementById("NameUserUpdate").value,
        gender: document.getElementById("selectGender").value,
        dateOfBirth: document.getElementById("DOBUserUpdate").value,
      }),
      headers: { "content-type": "application/json" },
    });
  }, 3000);

  // alert("Profile Updated Successfully");
  swal("Profile Updated Successfully", "DONE", "success");
}
// ===============================user profile update on json =============================

async function checkWatchListData() {
  var keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
  try {
    let res = await fetch(
      `https://jesonserver.onrender.com/userloginDetails/${keyU[1]}`
    );
    let data = await res.json();
    displayWatchList(data.watchList);
  } catch (error) {
    console.log(error);
  }
}
function displayWatchList(data) {
  document.getElementById("appendWatchList").innerHTML = "";
  if (data.length === 0) {
    document.getElementById("imgOfERRORmyWatchlist").style.display = "flex";
    document.getElementById("MyWatchListDisplay").style.display = "none";
  } else {
    document.getElementById("imgOfERRORmyWatchlist").style.display = "none";
    document.getElementById("MyWatchListDisplay").style.display = "block";
    data.forEach((element) => {
      let watchListAppendData = `
                    <div>
                   <img src="${element.photo}" alt="" />
                   </div>
                    <div>
                    <h3>${element.title.slice(0, 40)}...</h3>
                    <button id="WatchListWatch" onclick="PlayYoutubeVideo('${
                      element.title
                    }')">Watch</button>
                    <button id="watchListRemove" onclick="removeWatchList('${
                      element.VID
                    }')">Remove</button>
                    </div>
                    `;
      let div = document.createElement("div");
      div.innerHTML = watchListAppendData;

      document.getElementById("appendWatchList").append(div);
    });
  }
}
function removeWatchList(ele) {
  getDataFromServer();

  async function getDataFromServer() {
    try {
      var arrOfWatchList;
      let arr = JSON.parse(localStorage.getItem("KeyOfLogin"));
      let id = arr[1];
      let url = `https://jesonserver.onrender.com/userloginDetails/${id}`;
      let res = await fetch(url);
      let data = await res.json();
      arrOfWatchList = data.watchList;
      arrOfWatchList.forEach((element, index) => {
        if (element.VID == ele) {
          arrOfWatchList.splice(index, 1);
        }
      });

      setTimeout(function () {
        fetch(`https://jesonserver.onrender.com/userloginDetails/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            watchList: arrOfWatchList,
          }),
          headers: { "content-type": "application/json" },
        });
      }, 3000);
      // alert("Removed From Watch List");
      swal("Removed From Watch List", "DONE", "success");
      checkWatchListData();
    } catch (error) {
      console.log(error);
    }
  }
}

function PlayYoutubeVideo(ele) {
  console.log(ele);
  localStorage.setItem("PlayYoutube", ele);
  window.open("./playvideo.html", "_self");
}
