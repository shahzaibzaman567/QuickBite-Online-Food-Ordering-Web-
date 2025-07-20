let Shoping = JSON.parse(sessionStorage.getItem("userShoping")) || [];
let container = document.querySelector(".shocontainer");

Shoping.forEach((Shoping, i) => {
    let card = document.createElement("div");
    card.className = "card col-12 col-sm-3 col-md-3 col-lg-3 col-xxl-3 ms-xxl-5 ms-lg-5 ms-md-4 ms-sm-2";

    card.innerHTML = `
        <img src="${Shoping.Img}" class="img img-fluid card-img-top" style="height: 300px;" alt="${Shoping.title}">
        <div class="card-body container-fluid">
            <h5 class="card-title">${Shoping.title}</h5>
            <p class="card-text">${Shoping.prise}</p>
            <p class="count">Quantity: ${Shoping.quantity || 1}</p>
            <button class="btn w-100 btn-primary add-to-cart" data-index="${i}">Remove  Item</button>
            <div    class=""id="btn-group" id="btn-group ">
            <button class="btn  btn-sm  btn-success"   btn-sbtract >+</button>
            <button class="btn  btn-sm  btn-danger">-</button>
            <div>
        </div>`;

    container.appendChild(card);
});


let btnGroup=document.querySelector("#btn-group")

btnGroup.addEventListener("click", (e) => {

    if (e.target.classList.contains("btn-sbtract")) {
        let count=document.querySelector(".count");
       
       count.innerHTML=`  Quantity : ${--Shoping.quantity}`

        if (Shoping.quantity === 0) {
            Shoping.quantity=0
            count.innerHTML=`Quantity:${Shoping.quantity=0}`
        } 
    }
});

