let Shoping = JSON.parse(sessionStorage.getItem("userShoping")) || [];
let container = document.querySelector(".shocontainer");
let Cards=[]


Shoping.forEach((Shoping, i) => {
    let card = document.createElement("div");
    card.className = "card col-12 col-sm-3 col-md-3 col-lg-3 col-xxl-3 ms-xxl-5 ms-lg-5 ms-md-4 ms-sm-2" ;

    card.innerHTML = `
        <img src="${Shoping.Img}" class="img img-fluid card-img-top" style="height: 300px;" alt="${Shoping.title}">
        <div class="card-body container-fluid">
            <h5 class="card-title">${Shoping.title}</h5>
            <div    class="d-flex">
            <p>Rs :   </p>  <p class="card-text">${Shoping.prise}</p>
            </div>
            <div    class="d-flex">
            <p>Quantity :   </p>    <p class="count"   >     ${Shoping.quantity}</p>
            </div>
            <button class="Remove btn w-100 btn-primary add-to-cart" id="Remove"  data-index="${i}">Remove  Item</button>
            <div    class="btngroup"id="btn-group">
            <button class="plus btn  btn-sm  btn-success"  id="plus" >+</button>
            <button class="sub  btn  btn-sm  btn-danger  "    >-</button>
            <div>
            </div>`;

    container.appendChild(card);
Cards.push(card)
});
console.log(Cards)
// count[i].innerHTML=Shoping.quantity;
///is ma shoping jo ha wo os ka index par chalta ha to to jitna obj aya ga os ma btn hoga or 
//is liya ya har har kisi par chalta ha

container.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("Remove")) {
        
        let card=document.querySelectorAll(".card");
        let index = Number(e.target.getAttribute("data-index"));

        Cards[index].remove()

    }
})

let count = document.querySelectorAll(".count");
let plus = document.querySelectorAll(".plus");
let sub = document.querySelectorAll(".sub")
let remove=document.querySelectorAll("#Remove")
i = 0

Shoping.forEach((Shoping, i) => {



    plus[i].addEventListener("click", () => {


        count[i].innerHTML = ++Shoping.quantity

//for   chcking
        // console.log("hay")
    })

    
    sub[i].addEventListener("click", () => {

        if(count[i].innerHTML==0){

            count[i].innerHTML = 0;

        }else{

            count[i].innerHTML=--Shoping.quantity;
        }


    })

    
    

})

    // remove[i].addEventListener("click",()=>{
    // let card=document.querySelectorAll(".card");
    // i=0

    // card[i].remove()
    // sessionStorage.key(Shoping[i])

    // })
