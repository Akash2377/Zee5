getdataMovies();
async function getdataMovies() {
  try {
    let url = "https://jesonserver.onrender.com/zeeOriginalData";
    let res = await fetch(url);
    let data = await res.json();
    getdataMoviesAppend(data);
  } catch (error) {
    console.log(error);
  }
}

function getdataMoviesAppend(data) {
  data.forEach(function (ele) {
    let card = document.querySelector("#CardSlideId");
    card.innerHTML =
      card.innerHTML +
      `<div class="cardbox">
            <img src="${ele.img_url}" alt="Mithya" />
            <div class="crownicon">
              <a href="#"><i class="fa-solid fa-crown"></i></a>
            </div>
            <div class="text_content">
              <h2>${ele.moviename}</h2>
              <div class="bottom_text">
                <div class="watch-btn">
                    <a >
                    <i onclick="SaveAndPlayVideoYoutube('${ele.moviename}')" class="fa-solid fa-play " ></i> Watch</
                    </a>
                </div>
                <p ><i onclick="showMoreResultsMovie('${ele.moviename}')"class="fa-solid fa-share-nodes"></i> More</p>
              </div>
            </div>
          </div>`;
  });
}

function slideCardBoard1(direction) {
  var container = document.getElementById("CardSlideId");

  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 28;
    } else {
      container.scrollLeft += 28;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
getdata();
async function getdata() {
  try {
    let url = "https://www.omdbapi.com/?apikey=d6f2de94&s=marvel";
    let res = await fetch(url);
    let data = await res.json();

    slideFunctionForMarvel(data.Search);
  } catch (error) {
    console.log(error);
  }
}

function slideFunctionForMarvel(data) {
  data.forEach(function (ele) {
    let card = document.querySelector("#CardSlideId2");
    card.innerHTML =
      card.innerHTML +
      `<div class="cardbox">
            <img src="${ele.Poster}" alt="Mithya" />
            <div class="crownicon">
              <a href="#"><i class="fa-solid fa-crown"></i></a>
            </div>
            <div class="text_content">
              <h2>${ele.Title}</h2>
              <div class="bottom_text">
                <div class="watch-btn watchbtn">
                    <a >
                    <i onclick="SaveAndPlayVideoYoutube('${ele.Title}')" class="fa-solid fa-play " ></i> Watch</
                     </a> 
                </div>
                <p ><i  onclick="showMoreResultsMovie('${ele.Title}')"class="fa-solid fa-share-nodes"></i> More</p>
              </div>
            </div>
          </div>`;
  });
}

function slideCardBoard2(direction) {
  var container = document.getElementById("CardSlideId2");

  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 28;
    } else {
      container.scrollLeft += 28;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
getdataTVShows();
async function getdataTVShows() {
  try {
    let url =
      "https://api.hotstar.com/s/sniper/forerunner?q=Tv%20shows&size=100";
    let res = await fetch(url);
    let data = await res.json();
    getdataTVShowsAppend(data.body.results.items);
  } catch (error) {
    console.log(error);
  }
}

function getdataTVShowsAppend(data) {
  data.forEach(function (ele) {
    let card = document.querySelector("#CardSlideId3");
    card.innerHTML =
      card.innerHTML +
      `<div class="cardbox">
            <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/${
            ele.images.v || ele.images.h
          }"
          alt=""
        />
            <div class="crownicon">
              <a href="#"><i class="fa-solid fa-crown"></i></a>
            </div>
            <div class="text_content">
              <h2>${ele.title}</h2>
              <div class="bottom_text">
                <div class="watch-btn">
                    <a >
                    <i onclick="SaveAndPlayVideoYoutube('${
                      ele.title
                    }')" class="fa-solid fa-play " ></i> Watch</
                    </a>
                </div>
                <p ><i onclick="showMoreResultsMovie('${
                  ele.title
                }')"class="fa-solid fa-share-nodes"></i> More</p>
              </div>
            </div>
          </div>`;
  });
}
function slideCardBoard3(direction) {
  var container = document.getElementById("CardSlideId3");

  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 28;
    } else {
      container.scrollLeft += 28;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
getdataWebSeries();
async function getdataWebSeries() {
  try {
    let url = "https://jesonserver.onrender.com/webseries";
    let res = await fetch(url);
    let data = await res.json();
    getdataWebSeriesAppend(data);
  } catch (error) {
    console.log(error);
  }
}

function getdataWebSeriesAppend(data) {
  data.forEach(function (ele) {
    let card = document.querySelector("#CardSlideId4");
    card.innerHTML =
      card.innerHTML +
      `<div class="cardbox">
            <img src="${ele.img_url}" alt="Mithya" />
            <div class="crownicon">
              <a href="#"><i class="fa-solid fa-crown"></i></a>
            </div>
            <div class="text_content">
              <h2>${ele.moviename}</h2>
              <div class="bottom_text">
                <div class="watch-btn">
                    <a >
                    <i onclick="SaveAndPlayVideoYoutube('${ele.moviename}')" class="fa-solid fa-play " ></i> Watch</
                    </a>
                </div>
                <p ><i onclick="showMoreResultsMovie('${ele.moviename}')"class="fa-solid fa-share-nodes"></i> More</p>
              </div>
            </div>
          </div>`;
  });
}
function slideCardBoard4(direction) {
  var container = document.getElementById("CardSlideId4");

  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 28;
    } else {
      container.scrollLeft += 28;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}

getDataBojMovies();
async function getDataBojMovies() {
  try {
    let url = "https://jesonserver.onrender.com/bhojpuriData";
    let res = await fetch(url);
    let data = await res.json();
    getDataBojMoviesAppend(data);
  } catch (error) {
    console.log(error);
  }
}

function getDataBojMoviesAppend(data) {
  data.forEach(function (ele) {
    let card = document.querySelector("#CardSlideId5");
    card.innerHTML =
      card.innerHTML +
      `<div class="cardbox">
            <img src="${ele.img_url}" alt="Mithya" />
            <div class="crownicon">
              <a href="#"><i class="fa-solid fa-crown"></i></a>
            </div>
            <div class="text_content">
              <h2>${ele.moviename}</h2>
              <div class="bottom_text">
                <div class="watch-btn">
                    <a >
                    <i onclick="SaveAndPlayVideoYoutube('${ele.moviename}')" class="fa-solid fa-play " ></i> Watch</
                    </a>
                </div>
                <p ><i onclick="showMoreResultsMovie('${ele.moviename}')"class="fa-solid fa-share-nodes"></i> More</p>
              </div>
            </div>
          </div>`;
  });
}
function slideCardBoard5(direction) {
  var container = document.getElementById("CardSlideId5");

  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      container.scrollLeft -= 28;
    } else {
      container.scrollLeft += 28;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
// let card = document.querySelector(".cardbox_container");

function SaveAndPlayVideoYoutube(titleOfVideo) {
  localStorage.setItem("PlayYoutube", titleOfVideo);
  window.open("./playvideo.html", "_self");
}

function showMoreResultsMovie(titleOfVideo) {
  localStorage.setItem("moreMoviesDataSerch", JSON.stringify(titleOfVideo));
  window.open("./moreMoviesData.html", "_self");
}
