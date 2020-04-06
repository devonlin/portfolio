const li = document.querySelectorAll("LI");

li.addEventListener("click", function () {
  const nav = document.getElementById("menu-overlay");
  nav.classList.add("anime");
});
