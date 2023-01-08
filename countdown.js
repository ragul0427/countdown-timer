

function updatetime(){
const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");



const current_year=new Date().getFullYear();
const new_year=new Date(`january 1 ${current_year+1} 00:00:00`);
const current_date=new Date();
const difference=new_year-current_date;
const d=Math.floor(difference/1000/60/60/24);
const h=Math.floor((difference/1000/60/60)%24);
const m=Math.floor((difference/1000/60)%60);
const s=Math.floor((difference/1000)%60);
console.log(d+" "+h+" "+m+" "+s)
days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;
}

setInterval(updatetime,1000);