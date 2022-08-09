let zeedata = () => {
  return zeePlexObj;
};
let zeePlexObj = [
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5137583/list/1170x658withlogo462581fcd092448eb1b8c04ba3720ebb.jpg",
    title: "Flee",
    des: "Documentary • 1h 20m • A",
    re_on: "17 December, 2021",
    re_by: "Sony Pictures Television",
    audio: "English, Hindi, Tamil, Telugu",
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5129922/list/1170x658withlogodec691fd10914858b52094aa36eb78e3.jpg",
    title: "Spider-Man: No Way Home",
    des: "Adventure • 2h 33m • U/A",
    re_on: "25 December, 2021",
    re_by: "Sony Pictures Television",
    audio: "English, Hindi, Tamil, Telugu",
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5137609/list/1170x658withlogo99f449aed5be477d92eed6da23e50af0.jpg",
    title: "American Underdog",
    des: "Biopic • 1h 47m • A",
    re_on: "25 December, 2021",
    re_by: "Sony Pictures Television",
    audio: "English",
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_508,h_286,c_scale,f_webp,q_auto:eco/resources/0-0-1z5137599/list/1170x658withlogo27dbfea633eb4db5b7adbd6094ae9e39.jpg",
    title: "A Journal for Jordan",
    des: "Drama • 2h 5m • A",
    re_on: "3 December, 2021",
    re_by: "Cinephil",
    audio: "English",
  },
];

let zeep = () => {
  return `<div class="zee-heading">
    <h1>ZEEPLEX Movies on ZEE5 <span id="i" style="color:palevioletred; cursor: pointer;">ⓘ</span></h1>
    <h3>Watch films before the theatre </h3>
    </div>`;
};

// potrate

let zeedata2 = () => {
  return zeePlexObj2;
};
let zeePlexObj2 = [
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_215,h_323,c_scale,f_webp,q_auto:eco/resources/0-0-1z5137583/portrait/1920x7709b70ad2fd63d4fc8b21b6fce848c0303.jpg",
    title: "Flee",
    des: "Documentary • 1h 20m • A",
    re_on: "17 December, 2021",
    re_by: "Sony Pictures Television",
    audio: "English, Hindi, Tamil, Telugu",
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_215,h_323,c_scale,f_webp,q_auto:eco/resources/0-0-1z5129922/portrait/1920x7709b6b03d994a741d0808255d99f972125.jpg",
    title: "Spider-Man: No Way Home",
    des: "Adventure • 2h 33m • U/A",
    re_on: "25 December, 2021",
    re_by: "Sony Pictures Television",
    audio: "English, Hindi, Tamil, Telugu",
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_215,h_323,c_scale,f_webp,q_auto:eco/resources/0-0-1z5137609/portrait/1920x7705b466317f74a43a09a353bf23f712d3d.jpg",
    title: "American Underdog",
    des: "Biopic • 1h 47m • A",
    re_on: "25 December, 2021",
    re_by: "Sony Pictures Television",
    audio: "English",
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_215,h_323,c_scale,f_webp,q_auto:eco/resources/0-0-1z5137599/portrait/1920x770a09b1ae0fd4b495fbdbc7d6d780c67fe.jpg",
    title: "A Journal for Jordan",
    des: "Drama • 2h 5m • A",
    re_on: "3 December, 2021",
    re_by: "Cinephil",
    audio: "English",
  },
];

let zeeplexappendfn = (main) => {
  let Super = document.createElement("div");
  Super.setAttribute("class", "super");

  let data = zeedata();
  data.forEach((ele) => {
    // console.log(ele)

    let box = document.createElement("div");
    box.setAttribute("class", "dbox");
    box.addEventListener("click", () => {
      zeePlexPage();
    });

    let image = document.createElement("img");
    image.src = ele.image;

    let box1 = document.createElement("div");
    box1.setAttribute("class", "ptex");

    let part1 = document.createElement("div");
    let title = document.createElement("h2");
    title.innerText = ele.title;

    let des = document.createElement("p");
    des.innerText = ele.des;
    part1.append(title, des);

    let part2 = document.createElement("div");
    let logo = document.createElement("img");
    logo.src = "https://www.zee5.com/images/zee-plex-logo.png";

    box1.append(part1, logo);

    box.append(image, box1);
    Super.append(box);
    main.append(Super);
  });

  const zeePlexPage = () => {
    window.location.href = "../pages/zeepage.html";
  };
};

export { zeeplexappendfn, zeep, zeedata2 };
