
dogs = [];
for (i=1;i<7;i++) {
  dogs.push(prompt("Name of dog number " + i));
}
dogs.sort().reverse();
for (i=0;i<6;i++) {
  document.getElementById("mod2ex3").innerHTML += "<li>"+dogs[i]+"</li>";
}