let Shoping = JSON.parse(sessionStorage.getItem("userShoping")) || [];
let container = document.querySelector(".shocontainer");
let table = document.querySelector("#table")
let Cards = []

Shoping.forEach((Shoping, i) => {
    let card = document.createElement("div");
    card.className = "card col-12 col-sm-3 col-md-3 col-lg-3 col-xxl-3 ms-xxl-5 ms-lg-5 ms-md-4 ms-sm-2";

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

        let card = document.querySelectorAll(".card");
        let index = Number(e.target.getAttribute("data-index"));

        Cards[index].remove()


        let quantity = document.querySelectorAll(".quantity");
        let prise = document.querySelectorAll(".prise");
        let tdtotal = document.querySelector(".total")


 tdtotal.innerHTML=Number(tdtotal.innerHTML)    - Number (prise[index].innerHTML)
        quantity[index].innerHTML = 0
        prise[index].innerHTML = 0;

        // console.log( typeof   )

     
    }
})  

let count = document.querySelectorAll(".count");
let plus = document.querySelectorAll(".plus");
let sub = document.querySelectorAll(".sub")
let remove = document.querySelectorAll("#Remove")

i = 0;
Shoping.forEach((Shoping, i) => {



    plus[i].addEventListener("click", () => {

        // let title=document.querySelector(".title");

        count[i].innerHTML = ++Shoping.quantity



        let quantity = document.querySelectorAll(".quantity");
        let prise = document.querySelectorAll(".prise");
        let tdtotal = document.querySelector(".total")


        quantity[i].innerHTML = Shoping.quantity
        prise[i].innerHTML = Shoping.prise * Shoping.quantity;

        // console.log( typeof   )

        tdtotal.innerHTML = Number(tdtotal.innerHTML) + Shoping.prise




        //for   chcking
        // console.log("hay")
        // console.log(title,prise,quantity)
    })




    sub[i].addEventListener("click", (event) => {
        event.preventDefault()


        let quantity = document.querySelectorAll(".quantity");
        let prise = document.querySelectorAll(".prise");
        let tdtotal = document.querySelector(".total")


        
        


        if (count[i].innerHTML == 0) {
            
            count[i].innerHTML = 0;
            
            tdtotal.innerHTML = Number(tdtotal.innerHTML)   
            
        } else {
            
            count[i].innerHTML = --Shoping.quantity;
            
            quantity[i].innerHTML = Shoping.quantity
            prise[i].innerHTML = Shoping.prise * Shoping.quantity;
            
            tdtotal.innerHTML = Number(tdtotal.innerHTML) - Shoping.prise;

        }



    })
})






window.addEventListener("DOMContentLoaded", () => {

    Shoping.forEach((Shoping, i) => {

        let tr = document.createElement("tr")

        tr.innerHTML = `
        
        
        <th class="title">${Shoping.title}</th>
              <th   class="quantity">${Shoping.quantity}</th>
                   <th  class="prise" > ${Shoping.prise}</th>
        
        
                   


        `
        //for   checking    the table   

        table.appendChild(tr)
        let quantity = document.querySelectorAll(".quantity");
        let prise = document.querySelectorAll(".prise");

        quantity[i].innerHTML = Shoping.quantity
        prise[i].innerHTML = Shoping.prise * Shoping.quantity

        console.log(quantity, prise)







    })

    //  for total   count

    let tdtotal = document.querySelector(".total")


    let redu = Shoping.reduce((acc, curr) => {

        //For   Debuging   
        // console.log(acc)
        // console.log(curr)
        // console.log(acc.prise)
        // console.log(curr.prise) 

        curr = curr.prise * curr.quantity;


        let result = acc + curr
        
        console.log(result)
        return result;

    }, 0)


    tdtotal.innerHTML = redu



console.log(redu)

})




