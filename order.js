



let     orderbtn=document.querySelector("#order");


orderbtn.addEventListener("click",()=>{

let   sesssionData=JSON.parse(sessionStorage.getItem("userShoping")) || [];  
let     detail=document.querySelector("#orderdetail");
let     Loader=document.querySelector("#Loader");
let     spinner=document.querySelector("#spinner");

// console.log(sesssionData.length)

if(sesssionData.length  >= 1){

    

    detail.remove();

    Loader.classList.add("loader");
    Loader.innerHTML=`<h1  calss="text-white" >Loading</h1>`;
    spinner.classList.add("spin")
    sessionStorage.clear();

setTimeout(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{
    
        console.log(data) 
Loader.classList.remove("loader");
        Loader.classList.add("After");
        Loader.innerHTML=`<h1>Your Order Has Been Placed!</h1>`;
        

    })
    .catch(err=>{
        Loader.classList.remove("loader");
        Loader.classList.add("After");
        Loader.innerHTML=`<h1>Your Order Has Been Placed!</h1>`;
        
    })

},6000)
    
}else{
    alert("pahla    shoping to  karo    bahi!")
}



})
