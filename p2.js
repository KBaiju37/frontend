let myColors = document.getElementById("circle")
console.log(myColors)

function cc(){
    if (myColors.style.background == "green"){
        myColors.style.background = "yellow"
    } else {
        myColors.style.background = "green"
    }
}