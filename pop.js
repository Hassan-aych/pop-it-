

   //  cdcd


$(document).ready(function(){
    $("#1").click(function(){
      comparaison.push(1)
    });

    $("#2").click(function(){
      comparaison.push(2)

     });
     $("#3").click(function(){
      comparaison.push(3)

     });
     $("#4").click(function(){
      comparaison.push(4)

     });
     $("#5").click(function(){
      comparaison.push(5)

     });
     $("#6").click(function(){
      comparaison.push(6)

     });
     $("#7").click(function(){
      comparaison.push(7)
    });


     $("#8").click(function(){
      comparaison.push(8)

     });

     $("#9").click(function(){
        comparaison.push(9)
       

  });

  
})
var letters=[{letter:'L',index:[1,4,7,8,9]},{letter:'T',index:[1,2,3,5,8]},{letter:'O',index:[1,2,3,4,6,7,8,9]},,{letter:'U',index:[1,3,4,6,7,8,9]},,{letter:'H',index:[1,3,4,5,6,7,9]}]
var rletter=''
var rindex=[]
var comparaison=[]
var generateRandomLetter=function(){
   
   var random = Math.floor(Math.random()*letters.length);
   rletter =  rletter + letters[random].letter
   rindex.push(letters[random].index)
   $("#rletter").html(rletter)
   return rindex

};

function compare(){
   var comp =true
   for (var i= 0;i<comparaison.length;i++){
       comp = comp && rindex[0].includes(comparaison[i])
   }
   if(comp===true){
      timeout=""
      $("#compare").html('You win')
   return 'You win'}
   else{
      $("#compare").html('You lose')
       return 'You lose'
   }
}
var countDown = 0
var timeout;

function myFunction() {
    timer = setInterval(updateClock, 1000)
  timeout = setTimeout(alertFunc, 10000);
}

function alertFunc() {
    clearInterval(timer)
    countDown = 0
    if($("#compare")=="You win"){
      $("#compare").append(" ,time is up play")
    }
    else{
    $("#compare").html('Time is up. Play again')}
   
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