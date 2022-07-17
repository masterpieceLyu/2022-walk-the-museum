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
const Museumgate_devide = document.querySelector(".museumgate_devide");
const MuseumGateOpen = document.querySelectorAll(".museumgate_devide-open");

window.offsethei;

addEventListener("scroll", function () {
  let value = this.scrollY;

  if (value) section1span1.style.left = 50 - value * 0.3 + "%";
  section1span2.style.left = 50 + value * 0.3 + "%";

  MuseumImg.style.width = 90 + value * 0.05 + "%";
  // MuseumImg.style.opacity = 100 - value * 0.07 + "%";
  Museumgate_devide.style.height = 22 + value * 0.07 + "%";

  if (value >= section2offsetTop / 2) {
    console.log("value over");
    MuseumGateOpen[0].style.transform =
      "transform(perspective(1200px) rotateY(40deg);)";
    MuseumGateOpen[1].style.transform =
      "transform(perspective(1200px) rotateY(40deg);)";
  }
  return;
});
