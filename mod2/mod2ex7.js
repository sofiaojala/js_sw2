
function dice(x){
  return Math.floor(Math.random() * x) + 1;
}
let sides = parseInt(prompt("How many sides in a dice? "));
let rolled = dice(sides);
while (rolled != sides) {
  document.getElementById("mod2ex7").innerHTML += "<li>"+rolled+"</li>";
  rolled = dice(sides);
}
