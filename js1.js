
let start=document.querySelector('.start');
let stop=document.querySelector('.stop');
let reset=document.querySelector('.reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

start.addEventListener('click',()=>{
    timer=true;
    stopwatch();
} 
)


stop.addEventListener('click', function () {
timer = false;
});

reset.addEventListener('click', function () {
timer = false;
hour = 0;
minute = 0;
second = 0;
document.getElementById('hourd').innerHTML="00";
document.getElementById('minuted').innerHTML="00";
document.getElementById('secondd').innerHTML="00";
document.getElementById('countd').innerHTML= "00";
});

function stopwatch(){
    if(timer){
        count++;

        if(count==1000){
            seconds++;
            count=0;
        }
        if(seconds==60){
            minutes++;
            seconds=0;
        }
        if(minutes==60){
            hour++;
            minutes=0;
            seconds=0;
        }
         let hr=hour;
         let min=minutes;
         let sec=seconds;
         let count=count;

         if(hour<10)
         {
            hr='0'+hr;
         }
         if(minutes<10)
         {
            min='0'+min;
         }
         if(seconds<10){
            sec='0'+sec;
         }
         if(count<10){
            count='00'+count;

            document.getElementById('hourd').innerHTML=hr;
            document.getElementById('minuted').innerHTML=min;
            document.getElementById('secondd').innerHTML=sec;
            document.getElementById('countd').innerHTML=count;
         }            
        }
}
