
const css = document.querySelector(".color-code") // color code
const color1 = document.querySelector(".color1") // 1st color
const color2 = document.querySelector(".color2") // 2nd color
const bodys = document.querySelector(".gradient-box") // color display
const selectDirection=document.querySelector("#toDirection");
var linearDirection = selectDirection[0]  //Select box intial value
// alert(linearDirection.value)



function currentSettings() {
    var CSSprop = window.getComputedStyle(bodys,null).getPropertyValue("background-image")
    console.log(CSSprop)
    css.textContent = CSSprop
}

currentSettings()


 function returnColor(){
  
  bodys.style.background =
    "linear-gradient(" + linearDirection  + ", "  + color1.value  + ","  + color2.value   + ")";

    currentSettings()

}


// document.querySelector('#toDirection').onchange=returnColor;
selectDirection.addEventListener("change",function(){
   
    linearDirection=this.value;
    returnColor()
});
color1.addEventListener("input", returnColor)
color2.addEventListener("input", returnColor)