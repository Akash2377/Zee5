function searchMovieitm() {
  let MovieNameIN = document.getElementById("movieName").value;
  if (MovieNameIN != "") {
    let url = `https://api.hotstar.com/s/sniper/forerunner?q=${MovieNameIN}&size=5`;
    searchMovie(url);
  }
}
async function searchMovie(MovieUrl) {
  try {
    let url = MovieUrl;
    let response = await fetch(url);
    let data = await response.json();

    displayDataInDiv(data.body.results.items);

    // console.log(data.body.results.items);
  } catch (error) {
    console.log(error);
  }
}

function displayDataInDiv(movie) {
  document.getElementById("movie-container").style.display = "flex";
  document.getElementById("movie-container").innerHTML = "";
  movie.map(function (ele) {
    let dataMovie = `
            <div>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/${
                ele.images.h
              }"
              alt=""
            />
          </div>
          <div>
            <h4>${ele.title}</h4>
            <h5>${ele.genre[0]}, ${ele.channelName || ele.lang[0]} </h5>
          </div>`;
    let div = document.createElement("div");
    localStorage.setItem("NameOfMovieForPlayVideo", JSON.stringify(ele.title));
    div.setAttribute("onclick", `PlayYoutubeVideo('${ele.title}')`);
    div.innerHTML = dataMovie;
    document.getElementById("movie-container").append(div);
    debounce(changeDisplay, 6000);
  });

  let btn = document.createElement("button");
  btn.setAttribute("onclick", "showMovieData()");
  btn.setAttribute("id", "moreBTN");
  btn.innerText = "MORE RESULTS";
  document.getElementById("movie-container").append(btn);
}
function PlayYoutubeVideo(ele) {
  console.log(ele);
  localStorage.setItem("PlayYoutube", ele);
  window.open("playvideo.html", "_self");
}

function changeDisplay() {
  document.getElementById("movie-container").style.display = "none";
}
function showMovieData() {
  localStorage.setItem(
    "moreMoviesDataSerch",
    JSON.stringify(document.getElementById("movieName").value)
  );
  window.open("./moreMoviesData.html", "_self");
}
let timeId;
function debounce(func, delay) {
  if (timeId) {
    clearTimeout(timeId);
  }
  timeId = setTimeout(function () {
    func();
  }, delay);
}
