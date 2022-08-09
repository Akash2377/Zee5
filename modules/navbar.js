document.getElementById(
  "NavBarSection"
).innerHTML = `<navbar id="NavbarDivMain">
        <div id="box">
          <div id="box1">
            <ul>
              <li>
                <img
                  src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.50.94"
                  id="logo"
                  title="Zee5logo"
                  alt="Zee% lOgo"
                />
              </li>
              
              <li id="home_elem">
                <a href="./index.html" id="HomePageA">Home</a>
              </li>
                  <li id="tvshow_elem">
                <a href="./tvshow.html" id="TVShowsPageA">TV Shows</a>
              </li>
            <li id="movie_elem">
                <a href="./movies.html" id="MoviesPageA">Movies</a>
              </li>
            <li id="webseries_elem" >
                <a href="webseries.html" id="WebSeriesPageA">Web Series</a>
              </li>
             <li id="news_elem">
                <a href="./news.html" id="NewsPageA">News</a>
              </li>
              <li id="menu">
                <a href="#"
                  ><i class="fa-solid fa-ellipsis-vertical"></i
                  ><i class="fa-solid fa-ellipsis-vertical"></i
                  ><i class="fa-solid fa-ellipsis-vertical"></i
                ></a>
                <ul>
                  <li>
                    <a
                     
                      title="Zee5 Premium Package Subscription"
                      >Premium</a
                    >
                  </li>
                  <li>
                    <a  title="Watch Music Videos Online"
                      >Music</a
                    >
                  </li>
                  <li>
                    <a  href="./zeeFlex.html"
                      >ZEEFLEX</a
                    >
                  </li>
                  <li>
                    <a  href="./Eduaura.html"
                      >Eduaura</a
                    >
                  </li>
                  <li>
                    <a  title="Play Games Online"
                      >Play</a
                    >
                  </li>
                  <li><a title="Articles">Articles</a></li>
                  <li>
                    <a
                     
                      title="Watch Kids Shows, Cartoons,Movies & Videos Online"
                      >Kids</a
                    >
                  </li>
                  <li>
                    <a  title="Watch Official Fims Videos"
                      >Videos</a
                    >
                  </li>
                  <li>
                    <a title="Stories"
                      >Stories</a
                    >
                  </li>
                  <li><a href="channel.html">Channels</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="box2">
            <ul>
              <li style="margin-top: -5px">
                <div id="search_input_div">
                  <img src="./assets/img/serchLogo.png" alt="" style=" width: 15px; padding: 15px;"/>
                  <input
                    type="text"
                    onkeyup="debounce(searchMovieitm,500)"
                    id="movieName"
                    placeholder="Search for Movies, Shows, Channels etc..."
                  />
                  <section id="serchMovieList">
                    <div id="movie-container"></div>
                  </section>
                </div>
              </li>
                <li>
              <div id="translate"></div>
              </li>
              <li>
                <a
                  href="./pages/loginandsignup/login.html"
                  id="LogInBTNDisplay"
                >
                  <button id="log">LOGIN</button>
                </a>
                <i
                  class="fa-solid fa-circle-user"
                  id="profileIMG"
                  onclick="DisplayPrfileDiv()"
                ></i>
                <div id="profilePopDiv">
                  <button onclick="redirecttoProfilePage()">
                    <i class="fa-solid fa-user"></i>Profile
                  </button>
                  <button onclick="LogOutUserFromProfile()">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>Logout
                  </button>
                </div>
              </li>
              <li>
                <a href="./buyplan.html">
                  <button id="buy">
                    <i class="fa-solid fa-crown"></i> BUY PLAN
                  </button>
                </a>
              </li>
              <li id="menu11" style="color: #fff; cursor: pointer">
                <i title="Menu" class="fa-solid fa-bars"></i>
              </li>
            </ul>
          </div>
          <div id="menu1">
            <div class="submenu1">
              <a href="./index.html"> Home</a>
            </div>
            <div class="submenu1">
              <button class="accordion1">
                <p>Explore</p>
                <span class="arrow"><i class="fa-solid fa-sort-down"></i></span>
              </button>
              <div class="panel1">
                <a href="./Buyplan1.html">Premium</a>
                <a href="./music.html">Music</a>
                <a href="./about.html">About Us</a>
                <a href="./helpcenter.html">Help Center</a>
                <a href="./search.html">Videos</a>
              </div>
            </div>
            <div class="submenu1">
              <a href="./tvshow.html">Tv Show</a>
            </div>
            <div class="submenu1">
              <a href="./webseries_single.html">Web Series</a>
            </div>
            <div class="submenu1">
              <a href="./movies.html">Movies</a>
            </div>

            <div class="submenu1">
              <a href="./music.html">Music</a>
            </div>
            <div class="submenu1">
              <a href="./search.html">Videos</a>
            </div>
          </div>
        </div>
      </navbar>`;
