let image=document.getElementById("onbulb");
let catimg=document.getElementById("imagecat");
let switchbu=document.getElementById("switchbu");
let onbu=document.getElementById("onbu");
let offbu=document.getElementById("offbu");
function switchoff(){
    image.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catimg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switchstatus").textContent="switchoff";
    document.getElementById("switchstatus").style.color="red";

}
function switchon(){
    image.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catimg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchbu.textContent="switchon";
    switchbu.style.color="green";
   
}