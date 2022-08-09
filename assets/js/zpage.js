//.........................................................//

import { zeedata2 } from "./zeePlex.js";

console.log(zeedata2);
let data = zeedata2();

let Super = document.getElementById("plexdata");

Super.innerHTML = `<div><h2>Now Showing</h2></div>`;

let dis = document.createElement("div");
dis.setAttribute("id", "pmain");

data.forEach((ele) => {
  // console.log(ele)

  let box = document.createElement("div");
  box.setAttribute("class", "pcard");

  let image = document.createElement("img");
  image.src = ele.image;

  let img = document.createElement("div");
  img.setAttribute("class", "pimg");
  img.append(image);

  let part1 = document.createElement("div");
  part1.setAttribute("id", "ptext");

  let title = document.createElement("h2");
  title.innerText = ele.title;

  let des = document.createElement("p");
  des.innerText = ele.des;

  let pubOn = document.createElement("p");
  pubOn.innerHTML = `Released ON: <span>${ele.re_on}</span>`;

  let pubBy = document.createElement("p");
  pubBy.innerHTML = `Released By: <span>${ele.re_by}</span>`;

  let audio = document.createElement("p");
  audio.innerHTML = `Audio Languages <span>${ele.audio}</span>`;

  // btn ...
  let btn1 = document.createElement("button");
  btn1.innerText = "▶︎ Trailer";
  btn1.setAttribute("id", "t");
  btn1.addEventListener("click", () => {
    showtrailer();
  });

  let b = document.createElement("br");

  let btn2 = document.createElement("button");
  btn2.innerText = "Rent Now";
  btn2.setAttribute("id", "rent");

  part1.append(pubOn, title, des, pubBy, audio, btn1, b, btn2);

  box.append(img, part1);
  dis.append(box);
  Super.append(dis);
});

function showtrailer() {
  window.location.href = "./playvideo.html";
}
