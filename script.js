function makeBubble()
{
    var clutter=" ";
for(i=1;i<97;i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter += ` <div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}



var timer = 60;
var rn = 0;
function runTimer(){
    var timerINt = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerINt);
            document.querySelector("#pbtm").innerHTML = `Game Over`;
        }
    },1000);
}


function getNewhit()
{
     rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}


var score = 0;
function incresescore()
{
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm")
.addEventListener("click" ,function (dets)
{
   console.log(Number(dets.target.textContent));
   var clickednum = Number(dets.target.textContent);
   if(clickednum=== rn)
   {
    incresescore();
    makeBubble();
    getNewhit();
   }
   
});

runTimer(); 
makeBubble();
getNewhit();