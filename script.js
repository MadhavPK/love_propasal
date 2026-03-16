function startStory(){

document.getElementById("story").classList.remove("hidden")

setTimeout(()=>{
document.querySelector(".gallery").classList.remove("hidden")
},2000)

setTimeout(()=>{
document.querySelector(".love").classList.remove("hidden")
},4000)

setTimeout(()=>{
document.querySelector(".proposal").classList.remove("hidden")
},6000)

}

function yesClicked(){

document.querySelector(".proposal").style.display="none"
document.getElementById("result").classList.remove("hidden")

}