let timer;

document.addEventListener("scroll", () => {
  let section2offsetTop = document.querySelector(".visual-wrap").offsetTop;

  if (scrollY >= section2offsetTop) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = true;

        new numberCounter("art-count", 142389);
      }, 1);
    }
  }
});

// 네 번째 섹션 기부 카운팅 함수
function numberCounter(target_frame, target_number) {
  this.count = 0;
  this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
}
numberCounter.prototype.counter = function () {
  var self = this;
  this.diff = this.target_count - this.count;

  if (this.diff > 0) {
    self.count += Math.ceil(this.diff / 5);
  }

  this.target_frame.innerHTML = this.count
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (this.count < this.target_count) {
    this.timer = setTimeout(function () {
      self.counter();
    }, 30);
  } else {
    clearTimeout(this.timer);
  }
};

// const content = "Hi, You Can Walk \n The Museum.";
// const text = document.querySelector(".head-contents");
// let i = 0;

// function typing() {
//   if (i < content.length) {
//     let txt = content.charAt(i);
//     text.innerHTML += txt === "\n" ? "<br/>" : txt;
//     i++;
//   }
// }
// setInterval(typing, 100);

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

// let vh = document.querySelector(".visual-head ");
// const Museum = document.querySelector(".museum");
// const section = document.querySelectorAll(".f-p");

// addEventListener("scroll", function () {
//   let value = this.scrollY;
//   console.log(value);

//   if (value >= section[0].offsetTop && value < section[1].offsetTop / 4) {
//     vh.style.opacity = 100 - value * 0.5 + "%";
//     Museum.style.height = 520 + value * 0.5 + "px";
//     Museum.style.opacity = 1;
//     // Museum.style.opacity = 100 - value * 0.09 + "%";
//     // Museum.style.opacity = 100 - value * 0.07 + "%";
//     //   Museumgate_devide.style.height = 22 + value * 0.07 + "%";
//   } else if (value > section[1].offsetTop / 4) {
//     Museum.style.opacity = "0";
//   }
// });
