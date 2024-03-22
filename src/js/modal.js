var modal = document.getElementById("cartModal");
var btn = document.getElementById("openCartBtn")
var closeBtn = document.getElementsByClassName("close")[0]

btn.onclick = function() {
  modal.style.display = "flex";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}