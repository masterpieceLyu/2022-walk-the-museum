// const screenSize = {
//   vw: 0,
//   vh: 0,
// };

// function setScreenSize() {
//   screenSize.vw =
//     Math.max(
//       document.documentElement.clientWidth || 0,
//       window.innerWidth || 0
//     ) / 100;
//   screenSize.vh =
//     Math.max(
//       document.documentElement.clientHeight || 0,
//       window.innerHeight || 0
//     ) / 100;
// }

const { scrollY } = window;
let section1span1 = document.querySelector(".section1-span1");
let section1span2 = document.querySelector(".section1-span2");
let section1offsetTop = document.querySelector(".section1").offsetTop;
let section2offsetTop = document.querySelector(".section2").offsetTop;
const Museum = document.querySelector(".museum");
const MuseumImg = document.querySelector(".museumImg");
const MuseumGateImg = document.querySelector(".museumgateImg");

addEventListener("scroll", function () {
  let value = this.scrollY;

  section1span1.style.left = 50 - value * 0.1 + "%";
  section1span2.style.left = 50 + value * 0.1 + "%";
  // section1span1.style.transform =
  //   "translateX(${- 50 + -value}%) translateY(-50%)";
  // section1span2.style.transform =
  //   "translateX(${- 50 + value}%) translateY(-50%)";

  MuseumImg.style.width = 60 + value * 0.05 + "%";
  MuseumImg.style.opacity = 100 - value * 0.3 + "%";
  MuseumGateImg.style.height = 20 + value * 0.07 + "%";
  // MuseumGateImg.style.opacity = 0 + value * 0.001;

  // if (value >= section2offsetTop / 2) {
  //   MuseumImg.style.width = 60 + value * 0.05 + "%";
  // } else {
  //   MuseumImg.style.width = 60 + "%";
  // }
});
