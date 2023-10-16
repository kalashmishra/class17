var currantgrowth=0;
var progress=document.querySelector("#progress");
var inner=document.querySelector("#inner h3");

setInterval(function(){
    if(currantgrowth<100 ){
        currantgrowth++;
        progress.style.width=currantgrowth+"%";

         inner.textContent=currantgrowth+"%";

    }
},50)