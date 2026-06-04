let myColors = document.getElementById("circle")
console.log(myColors)

function cc(){
    if (myColors.style.background == "green"){
        myColors.style.background = "yellow"
    } else if(myColors.style.background == "yellow"){
            myColors.style.background = "white"
        } else{
            myColors.style.background = "green"
        }
    }
