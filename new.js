let line = document.getElementById("a");
console.log(line)


btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    if(document.querySelector("h1").textContent == "now i know dom manipulation"){
        document.querySelector("h1").textContent = "javacript is really tricky"
        document.querySelector("h1").style.color = "aqua";

    } else {
        document.querySelector("h1").textContent = "now i know dom manipulation";
        document.querySelector("h1").style.color = "white";
       
    }





})



