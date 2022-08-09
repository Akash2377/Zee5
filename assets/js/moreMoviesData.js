showDataOnwindow();
function showDataOnwindow() {
  let MovieNameIN = localStorage.getItem("moreMoviesDataSerch");
  let url = `https://api.hotstar.com/s/sniper/forerunner?q=${MovieNameIN}&size=100`;
  moreMovieAppendSearch(url);
  document.getElementById("NameSearchedFor").innerText = MovieNameIN;
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
  let newArr = [];
  document.getElementById("More-Page-Content-IMG").innerHTML = "";
  movie.map(function (ele, index) {
    let ImgM = `  <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/${
            ele.images.v || ele.images.h
          }"
          alt=""
        />
        <div class="EffectDivForHover">
          <h4>${ele.title}</h4>
          <p>${ele.contentType}</p>
          <button><i class="fa-solid fa-play"></i>Watch</button>
        </div>`;
    let objOfMovies = {
      Img: ele.images.v || ele.images.h,
      title: ele.title,
      content: ele.contentType,
    };

    newArr.push(objOfMovies);

    let div = document.createElement("div");
    div.innerHTML = ImgM;
    div.setAttribute("onmouseover", `showDivEffect('${index}')`);
    div.setAttribute("onmouseleave", `removediveEffect('${index}')`);
    div.setAttribute("onclick", `PlayYoutubeVideo('${ele.title}')`);
    document.getElementById("More-Page-Content-IMG").append(div);
  });
  document.getElementById("SortByABC").addEventListener("change", function () {
    SortArr(newArr);
  });
  document
    .getElementById("FilterByType")
    .addEventListener("change", function () {
      showFilteredArray(newArr);
    });
}
function PlayYoutubeVideo(ele) {
  localStorage.setItem("PlayYoutube", ele);
  window.open("./playvideo.html", "_self");
}
function showDivEffect(index) {
  let hoverEffect = document.querySelectorAll(".EffectDivForHover");
  hoverEffect[index].style.display = "flex";
}

function removediveEffect(index) {
  let hoverEffect = document.querySelectorAll(".EffectDivForHover");
  hoverEffect[index].style.display = "none";
}
function showFilteredArray(Arr) {
  document.getElementById("More-Page-Content-IMG").innerHTML = "";
  let changedValue = document.getElementById("FilterByType").value;

  var j = 0;
  for (var i = 0; i < Arr.length; i++) {
    if (Arr[i].content == changedValue || changedValue == "All") {
      let ImgM = `  <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/${Arr[i].Img}"
          alt=""
        />
        <div class="EffectDivForHover">
          <h4>${Arr[i].title}</h4>
          <p>${Arr[i].content}</p>
          <button><i class="fa-solid fa-play"></i>Watch</button>
        </div>`;
      let div = document.createElement("div");
      div.innerHTML = ImgM;
      div.setAttribute("onmouseover", `showDivEffect(${j})`);
      div.setAttribute("onmouseleave", `removediveEffect(${j})`);
      div.setAttribute("onclick", `PlayYoutubeVideo('${Arr[j].title}')`);
      document.getElementById("More-Page-Content-IMG").append(div);
      j++;
    }
  }
}
function SortArr(arr) {
  let HowToSortArr = document.getElementById("SortByABC").value;

  if (HowToSortArr == "ATOZ") {
    arr.sort(function (a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
    showFilteredArray(arr);
  } else if (HowToSortArr == "ZTOA") {
    arr.sort(function (a, b) {
      if (a.title > b.title) return -1;
      if (a.title < b.title) return 1;
      return 0;
    });
    showFilteredArray(arr);
  } else {
    showDataOnwindow();
  }
}
