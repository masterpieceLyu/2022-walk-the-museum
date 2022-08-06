const content = "Hi, You Can Walk \n The Museum.";
const text = document.querySelector(".head-contents");
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    i++;
  }
}
setInterval(typing, 100);

const screenSize = {
  vw: 0,
  vh: 0,
};

function setScreenSize() {
  screenSize.vw =
    Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    ) / 100;
  screenSize.vh =
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ) / 100;
}

let vh = document.querySelector(".visual-head ");
const Museum = document.querySelector(".museum");
const section = document.querySelectorAll(".f-p");

addEventListener("scroll", function () {
  let value = this.scrollY;
  console.log(value);

  if (value >= section[0].offsetTop && value < section[1].offsetTop / 4) {
    vh.style.opacity = 100 - value * 0.5 + "%";
    Museum.style.height = 520 + value * 0.5 + "px";
    Museum.style.opacity = 1;
    // Museum.style.opacity = 100 - value * 0.09 + "%";
    // Museum.style.opacity = 100 - value * 0.07 + "%";
    //   Museumgate_devide.style.height = 22 + value * 0.07 + "%";
  } else if (value > section[1].offsetTop / 4) {
    console.log("Tkfkwlrlwjs");
    Museum.style.opacity = "0";
  }
});
