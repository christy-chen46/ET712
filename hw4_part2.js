let index = 0;
const cards = document.querySelectorAll(".card");
const visible = 3;

const track = document.querySelector(".track");

function update() {
  track.style.transform = `translateX(${-index * 200}px)`;
}

document.querySelector(".btnright").addEventListener("click", function () {
  if (index < cards.length - visible) {
    index++;
  } else {
    index = 0;
  }
  update();
});

document.querySelector(".btnleft").addEventListener("click", function () {
  if (index > 0) {
    index--;
  } else {
    index = cards.length - visible;
  }
  update();
});