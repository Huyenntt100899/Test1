function activeMenu(x) {
  x.classList.toggle("change")
  var x = document.getElementById("nav")
  if (x.className === "header-nav") {
    x.className += " auto"
  } else {
    x.className = "header-nav"
  }
}
