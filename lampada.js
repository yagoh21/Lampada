const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");
const luz = document.getElementById("quebrada");


function lampOn (){
    lamp.src = "./img/ligada.jpg";

}


function lampOff (){
    lamp.src = "./img/desligada.jpg";

}



 function quebrada () {
     lamp.src = "./img/quebrada.jpg";
 }



turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
luz.addEventListener('click', quebrada );