function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");
  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}
const counter = document.querySelector(".counter");
console.log(counter);
const speed = 200;

const updateCount = () => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;
  const inc = target / speed;
  if (count < target) {
    counter.innerText = Math.ceil(count + inc);
    setTimeout(updateCount, 10);
  } else {
    count.innerText = target;
  }
};
updateCount();
function cb(response) {
  counter.innerText = response.value;
}
