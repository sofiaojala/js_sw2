
const array = [];
var num = (prompt("Number of participants?"))

for (let i=0; i<num;i++) {
    array[i] = (prompt("Type a name"));
    var node = document.createElement("li");
    document.querySelector("ul").appendChild(node);
    node.appendChild(document.createTextNode(array[i]));
}