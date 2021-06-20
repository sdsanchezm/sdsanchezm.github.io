var up = document.getElementById('kk1'); 
var down = document.getElementById('kk2'); 
  
var array1 = ["text 1", "text 2", "text 3", "text 4"];
  
up.innerHTML = "Click on the button to check: " + " " ;
  
function random_text1() {
    down.innerHTML = 
        array1[Math.floor(Math.random() * array1.length)];
}