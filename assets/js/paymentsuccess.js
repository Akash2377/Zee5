let price = localStorage.getItem("btnValue");
document.getElementById("PriceOfCourse").innerText = price;

async function redirectToHome() {
  try {
    let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
    let url = `https://jesonserver.onrender.com/userloginDetails/${keyU[1]}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    let arrUser = [];
    arrUser.push(data.userLoginId);
    arrUser.push(data.id);
    arrUser.push(data.name);
    arrUser.push(data.plan699);
    arrUser.push(data.plan499);
    localStorage.setItem("KeyOfLogin", JSON.stringify(arrUser));
    if (data.plan699) {
      localStorage.setItem("primeOrNotUser699", true);
    } else if (data.plan499) {
      localStorage.setItem("primeOrNotUser499", true);
    } else {
      localStorage.setItem("primeOrNotUser699", false);
      localStorage.setItem("primeOrNotUser499", false);
    }
    window.open("./profilepage.html", "_self");
  } catch (error) {
    console.log(error);
  }
}
