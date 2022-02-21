
let paragraph = document.getElementsByClassName("paragraph");

for (i = 0; i<paragraph.length; i +=1){
  paragraph[i].innerText = "vamo catioro";
  paragraph[0].style.color = "blue";
}

document.getElementsByTagName("h4")[0].style.color = "green";
