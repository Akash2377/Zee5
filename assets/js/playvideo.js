async function checkWatchList(val) {
  try {
    let arr = JSON.parse(localStorage.getItem("KeyOfLogin"));
    let id = arr[1];
    let url = `https://jesonserver.onrender.com/userloginDetails/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    data.watchList.forEach((element) => {
      if (element.VID == val) {
        document.getElementById("AddToWatchList").style.display = "none";
        document.getElementById("RemoveFromWatchList").style.display = "block";
      }
    });
  } catch (error) {
    console.log(error);
  }
}

showData();
async function showData() {
  try {
    // let API_Key = "AIzaSyDq721ZEm-k4Gw4lsM7PdHupdVSho59-EY";
    // let API_Key = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
    // let API_Key = "AIzaSyCftPbeNpkIfO1ZenM1gZyig6FwPPaFWUs";
    // let API_Key = "AIzaSyAvptm2s94qvpMCj-x6q_fAaU19Xm0ODdM";

    // let API_Key = "AIzaSyB6oTf8ixgbj03k06_g1She1vdGnzwPOQE";
    // let API_Key = "AIzaSyCd8s2X3b-Nr_eT2AY22umiKC0OiLAxwPg";
    // let API_Key = "AIzaSyB6cLOaAJ3Tvmuy4kHsKyRx1vYol7Ku6z0";
    // let API_Key = "AIzaSyDkUyWKXVguKF1y6wYQy3fQz2T2JX8q_ZY";
    // let API_Key = "AIzaSyD7v1w_pbXSgvMZ-QX1MLu_o7fLE8t1Kbg";
    let API_Key = "AIzaSyA5q3pQA9OmPNeZUgXfjTgirhyqdzV4I5M";
    let val = localStorage.getItem("PlayYoutube");
    console.log(val);
    let url = `https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=1&q=${val}&key=${API_Key}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    displayYouTubeVideo(data.items[0]);
  } catch (error) {
    console.log(error);
  }
}
function displayYouTubeVideo(data) {
  console.log(data);
  document.getElementById("PlayVideoPart").innerHTML = "";
  let dataappend = `  <iframe
          id="videoPlayer"
          src="https://www.youtube.com/embed/${data.id.videoId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div id="buyPlanDiv">
          <h1>Ad-Free with Premium now at 30%OFF : ₹699/year</h1>
          <button>
            <a href="./buyplan.html"
              id="buyPlanTagforchange"><i class="fa-solid fa-crown"></i> BUY PLAN</a
            >
          </button>
        </div>
        <div id="playvideoDetails">
          <h1>${data.snippet.title}</h1>
          <ul>
            <li>Zee5</li>
            <li>${data.snippet.publishedAt.slice(0, 4)}</li>
          </ul>
          <ul>
            <li>Documentary</li>
            <li>Drama</li>
            <li>A</li>
          </ul>
            <div id="div_watchlist">
              <button>
                <i class="fa-solid fa-share-nodes"></i><div>Share</d>
              </button>
              <button>
                <i id="RemoveFromWatchList"onclick="removeFromWatchList('${
                  data.id.videoId
                }')" class="fa-solid fa-folder-minus"></i>
                <i id="AddToWatchList"onclick="addToWatchList('${
                  data.id.videoId
                }','${data.snippet.title}','${
    data.snippet.thumbnails.medium.url
  } ')" class="fa-solid fa-folder-plus"></i><div>Watchlist</div>
              </button>
              </div>
          <h4>Audio Language : <span>english</span></h4>
         
          <p>${data.snippet.description}</p>
        </div>; `;
  checkWatchList(data.id.videoId);
  let div = document.createElement("div");
  div.innerHTML = dataappend;

  document.getElementById("PlayVideoPart").append(div);
}
function removeFromWatchList(videoID) {
  document.getElementById("AddToWatchList").style.display = "block";
  document.getElementById("RemoveFromWatchList").style.display = "none";

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
        if (element.VID == videoID) {
          arrOfWatchList.splice(index, 1);
        }
      });
      // alert("Removed From Watch List");
      swal("Removed From Watch List", "DONE", "success");
      setTimeout(function () {
        fetch(`https://jesonserver.onrender.com/userloginDetails/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            watchList: arrOfWatchList,
          }),
          headers: { "content-type": "application/json" },
        });
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
}

function addToWatchList(videoID, videotitle, videourl) {
  document.getElementById("AddToWatchList").style.display = "none";
  document.getElementById("RemoveFromWatchList").style.display = "block";

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
      objWatchList = { VID: videoID, title: videotitle, photo: videourl };
      // alert("Added video to Watch List");
      swal("Added video to Watch List", "Done", "success");
      arrOfWatchList.push(objWatchList);
      setTimeout(function () {
        fetch(`https://jesonserver.onrender.com/userloginDetails/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            watchList: arrOfWatchList,
          }),
          headers: { "content-type": "application/json" },
        });
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
}
showDataOnwindow();
function showDataOnwindow() {
  let MovieNameIN = localStorage.getItem("PlayYoutube");
  let url = `https://api.hotstar.com/s/sniper/forerunner?q=${MovieNameIN}&size=100`;
  moreMovieAppendSearch(url);
}
async function moreMovieAppendSearch(MovieUrl) {
  try {
    let url = MovieUrl;
    let response = await fetch(url);
    let data = await response.json();
    ShowMoreResultsInPage(data.body.results.items);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
function ShowMoreResultsInPage(movie) {
  document.getElementById("More-Page-Content-IMG").innerHTML = "";
  movie.map(function (ele, index) {
    let ImgM = `  <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/${ele.images.h}"
          alt=""
        />
        <div class="EffectDivForHover" id="effectDivForHover">
          <h4>${ele.title}</h4>
          <p>${ele.contentType}</p>
          <button><i class="fa-solid fa-play"></i>Watch</button>
        </div>`;
    let div = document.createElement("div");
    div.innerHTML = ImgM;

    div.setAttribute("onmouseover", `showDivEffect('${index}')`);
    div.setAttribute("onmouseleave", `removediveEffect('${index}')`);
    div.setAttribute("onclick", `PlayYoutubeVideo('${ele.title}')`);
    document.getElementById("More-Page-Content-IMG").append(div);
  });
}
function PlayYoutubeVideo(ele) {
  console.log(ele);
  localStorage.setItem("PlayYoutube", ele);
  window.open("playvideo.html", "_self");
}
function showDivEffect(index) {
  let hoverEffect = document.querySelectorAll(".EffectDivForHover");

  hoverEffect[index].style.display = "flex";
}

function removediveEffect(index) {
  let hoverEffect = document.querySelectorAll(".EffectDivForHover");
  hoverEffect[index].style.display = "none";
}
setInterval(function () {
  //===================================below video buy plan div conditions================================
  let flagHavePremium = localStorage.getItem("primeOrNotUser699");
  let flagBuyPremium = localStorage.getItem("primeOrNotUser499");
  let buyBtnDiv = document.getElementById("buyPlanDiv");
  if (flagHavePremium == "true") {
    document.getElementById("buyPlanDiv").style.display = "none";
  } else if (flagBuyPremium == "true") {
    document.getElementById(
      "buyPlanTagforchange"
    ).innerHTML = `<i class="fa-solid fa-crown"></i> UPGRADE PLAN`;
    buyBtnDiv.style.display = "flex";
  } else {
    document.getElementById(
      "buyPlanTagforchange"
    ).innerHTML = `<i class="fa-solid fa-crown"></i> BUY PLAN`;
    buyBtnDiv.style.display = "flex";
    // alert("Your Free time is over. Please purchase any plan to continue");
    swal(
      "You don't have any premium",
      "Please purchase any plan to continue",
      "error"
    );
    document.getElementById("buyPlanDiv").style.display = "flag";
    setTimeout(function () {
      window.open("./buyplan.html", "_self");
    }, 5000);
  }

  //===================================below video buy plan div conditions end============================
}, 2000);
