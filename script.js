
const yardWidths={
yard1:32,
yard2:36,
yard3:34,
yard4:35,
yard2$3:70
};

const cargoAngles={
"Steam Coal":34,
"Coking Coal":40,
"Pet Coke":37.5,
"Met Coke":40,
"Bauxite":37.5
};

const cargoDenaity={
"Steam Coal":1,
"Coking Coal":0.8,
"Pet Coke":0.75,
"Met Coke":0.5,
"Bauxite":1.65
};

const yardSelect=document.getElementById("yard");
const cargoSelect=document.getElementById("cargo");

function updateWidth(){
document.getElementById("width").value=yardWidths[yardSelect.value];
}

function updateAngle(){
document.getElementById("angle").value=cargoAngles[cargoSelect.value];
}

function updateDensity(){
document.getElementById("density").value=cargoDensity[cargoSelect.value];
}

yardSelect.addEventListener("change",updateWidth);
cargoSelect.addEventListener("change",updateAngle);
cargoSelect.addEventListener("change",updateDensity);

updateWidth();
updateAngle();
updateDensity();

function calculate(){

const yard=yardSelect.value;
const width=parseFloat(document.getElementById("width").value);
const density=parseFloat(document.getElementById("density").value);
const angleDeg=parseFloat(document.getElementById("angle").value);
const length=parseFloat(document.getElementById("length").value);

if(!density || !length){
alert("Please enter Density and Length");
return;
}

const angleRad=angleDeg*Math.PI/180;

let calculatedHeight=(length*Math.tan(angleRad))/2;
let height=Math.min(calculatedHeight,12);

document.getElementById("height").value=height.toFixed(2);

let volume=0;

if(yard!=="yard2$3"){
volume=0.5*length*width*height;
}else{

const baseLength=length;
const topLength=length-2*(height/Math.tan(angleRad));

volume=((baseLength+topLength)*height*width)/2;

}

const qty=volume*density;

document.getElementById("volume").innerHTML=volume.toFixed(2)+" m³";
document.getElementById("qty").innerHTML=qty.toFixed(2)+" Tons";
document.getElementById("extraNote").innerHTML=note;

}
