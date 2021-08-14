let changeImg = document.getElementById("bulb-img");
let changeHeading = document.getElementById("main-heading");
function turnOn() {
    changeImg.src = "image/bright.jpeg";
    changeHeading.innerHTML="The bulb is on"
     
}
function turnOff() {
    changeImg.src = "image/black.jpeg";
    changeHeading.innerHTML="The  bulb is off"
     
 }