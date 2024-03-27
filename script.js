const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
if(bar){
    bar.addEventListener("click",()=>{
        // nav bar should open
        nav.classList.add("active");
    })
}
const close=document.getElementById("close");
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}
