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

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.querySelector(".clock").innerHTML = time;
  setTimeout(showTime, 1000);
}
