
var count= 0;
var timer = null;

var countDown = 0
var counter = function(){
    count +=1 
 if(count===37){
    count=0
    alert('you win')

 }
    $("#RT").html("Score:"+count)
    
}
var timeout;

function myFunction() {
    timer = setInterval(updateClock, 1000)
  timeout = setTimeout(alertFunc, 31000);
}

function alertFunc() {
    clearInterval(timer)
    countDown = 0
  alert("you lose !");
}
$("#timer").html

var reload=function(){
    clearInterval(timer)
    countDown = 0
    location.reload()

}
var clockElement = document.getElementById( "time" )
function updateClock ( clock) {
    countDown++
    if (countDown < 10) {
        clockElement.innerHTML ="Time :"+ "0:0"+countDown
    } else {
        clockElement.innerHTML = "0:"+countDown
    }
}


    

