let Shoping = JSON.parse(sessionStorage.getItem("userShoping")) || [];
let container = document.querySelector(".shocontainer");

Shoping.forEach((item, i) => {
    let card = document.createElement("div");
    card.className = "card col-12 col-sm-3 col-md-3 col-lg-3 col-xxl-3 ms-xxl-5 ms-lg-5 ms-md-4 ms-sm-2";

    card.innerHTML = `
        <img src="${item.Img}" class="img img-fluid card-img-top" style="height: 300px;" alt="${item.title}">
        <div class="card-body container-fluid">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.prise}</p>
            <p class="count">Quantity: ${item.count || 1}</p>
            <button class="btn w-100 btn-primary add-to-cart" data-index="${i}">Add to Cart</button>
        </div>`;

    container.appendChild(card);
});
