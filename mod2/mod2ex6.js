
function dice(){
  return Math.floor(Math.random() * 6 + 1);
}
let rolled = dice();
while (rolled != 6) {
  document.getElementById("mod2ex6").innerHTML + rolled ;
  rolled = dice;
}
