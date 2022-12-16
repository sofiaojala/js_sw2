document.getElementById("trigger").onmouseover = function() {mouseOn()};
document.getElementById("trigger").onmouseout = function() {mouseOff()};

function mouseOn() {
  document.getElementById("target").src = 'img/picB.jpg';
}

function mouseOff() {
  document.getElementById("target").src = 'img/picA.jpg';
}