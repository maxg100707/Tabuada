function tabuada() {
  var num = document.getElementById("txtn");
  var tab = document.getElementById("seltab");

  if (num.value.length == 0) {
    alert("Coloque um numero");
  } else {
    var n = Number(num.value);
    var c = 1;
    tab.innerHTML = ``;
    while (c <= 10) {
      var item = document.createElement("option");
      item.text = `${n} X ${c} = ${n * c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
/*
        _             _
       / \           / \
      /   \         /   \
     /     \_______/     \
    /  ___           ___  \
   |  / ()\         / ()\  |
   |  \___/         \___/  |
   |           ___         |
   \          |___|        /
    \           |         /
     \      \___|___/    /
      \_               _/
        \_____________/  
           MIAW MIAW


instagram : https://www.instagram.com/maxg1007/
portifolio : https://maxg100707.github.io/Portifolio/

*/
