//Detail  of  food

let foodDetail = [
    {
        title: "biryani",
        Img: "./images/biryani1.jpg",
        prise:  1500

    },
    {
        title: "pizza,Burger",
        Img: "./images/buns-kXYD--621x414LiveMint_1719298341858_1719298342001.webp",
        prise:  2500

    },
    {
        title: "burger",
        Img: "./images/burger1.jpg",
        prise:    700

    },

    {
        title: "zingerBurder",
        Img: "./images/burger2.jpg",
        prise: 1500

    }, {
        title: "chicken",
        Img: "./images/chiken.jpg",
        prise:  2000

    },
    {
        title: "rostChicken",
        Img: "./images/chiken2.jpg",
        prise:  1000

    }, {
        title: "crispi   Chicken",
        Img: "./images/chiken3.jpg",
        prise:   1500

    }, {
        title: "palo",
        Img: "./images/chikenfullPalat.jpg",
        prise:   400

    }, {
        title: "mix  Fast Food   ",
        Img: "data:image/jpeg;base64,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",
        prise: 3000

    }, {
        title: "burger,Fries",
        Img: "./images/fastfood.avif",
        prise:   700

    }, {
        title: "tower    Burger",
        Img: "./images/fastfood.jpg",
        prise:  1200
    }, {
        title: "burger,Fries",
        prise:  800,
        Img: "./images/fastfood.webp",

    }, {
        title: "juice,Burger,Fries",
        Img: "./images/fries.jpg",
        prise:   1400

    }, {
        title: "chicken   Rost",
        Img: "./images/Goat-Meet.jpg",
        prise:   1600

    }, {
        title: "chicken,Juice",
        Img: "./images/hq720.jpg",
        prise:   1700

    }, {
        title: "mix  Fast    Food",
        Img: "data:image/jpeg;base64,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",
        prise: 2600

    }, {
        title: "mix  Fast    Food    and     CoolDrink",
        Img: "data:image/jpeg;base64,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",
        prise:   3500

    },
    {
        title: "pizza,burger,cool,drinks",
        Img: "./images/images.jpg",
        prise:   1400

    },

    {
        title: "pizza",
        Img: "./images/pizza.jpg",
        prise:   1300

    },

    {
        title: "pizza",
        Img: "./images/pizza.webp",
        prise:  900

    },

    {
        title: "tandori  Chicken",
        Img: "./images/Palo-Full-chiken.jpg",
        prise:   1350,
    }



]





//head  container of  cards
let container = document.querySelector("#container");

//to peint   the  data in multiple  cards
for (let i = 0; i < foodDetail.length; i++) {
    let card = document.createElement("div");

    card.className = "card col-12 col-sm-3 col-md-3  col-lg-3 col-xxl-3  ms-sm-2 ";

    card.innerHTML = `<img src=${foodDetail[i].Img}  class="img img-fluid "  style="height: 300px;" height="60"  class="card-img-top" alt="...">
<div class="card-body  container-fluid   ">
  <h5 class="card-title">${foodDetail[i].title}</h5>
  <p class="card-text">Rs   : ${foodDetail[i].prise}</p>
  <p   class="count" ></p>
  <button   class="btn w-100 btn-primary  add-to-cart"  data-index="${i}">Add  to  Cart </button>
</div>`

    container.appendChild(card);
}

//the  search  Form 
let formsearch = document.querySelector("#formsearch");

formsearch.addEventListener("submit", (event) => {
    event.preventDefault();//to save    the load


    let searc = document.querySelector(".form-control").value.trim().toLowerCase();
    let search = searc.slice(0, 1);
    let Title = foodDetail.filter(t => t.title.slice(0, 1).toLowerCase() === search);
//titlechecking
    if (Title.length > 0) {


        container.innerHTML = ``;

        for (let i = 0; i < Title.length; i++) {

            let card = document.createElement("div");

            card.className = "card col-12 col-sm-3 col-md-3  col-lg-3 col-xxl-3 ms-xxl-5 ms-lg-5 ms-md-4 ms-sm-2 ";

            card.innerHTML = `<img src=${Title[i].Img}  class="img img-fluid "  style="height: 300px;" height="60"  class="card-img-top" alt="...">
        <div class="card-body  container-fluid   ">
          <h5 class="card-title">${Title[i].title}</h5>
          <p class="card-text">${Title[i].prise}</p>
          <p   class="count" ></p>
          <button   class="btn w-100 btn-primary  add-to-cart"  data-index="${i}">Add  to  Cart </button>
        </div>`

            container.appendChild(card);





        }

    }
    else if (searc === "all" || searc === "") {
        container.innerHTML = ``;

        for (let i = 0; i < foodDetail.length; i++) {

            let card = document.createElement("div");

            card.className = "card col-12 col-sm-3 col-md-3  col-lg-3 col-xxl-3 ms-xxl-5 ms-lg-5 ms-md-4 ms-sm-2 ";

            card.innerHTML = `<img src=${foodDetail[i].Img}  class="img img-fluid "  style="height: 300px;" height="60"  class="card-img-top" alt="...">
        <div class="card-body  container-fluid   ">
          <h5 class="card-title">${foodDetail[i].title}</h5>
          <p class="card-text">${foodDetail[i].prise}</p>
          <p   class="count" ></p>
          <button   class="btn w-100 btn-primary  add-to-cart"  data-index="${i}">Add  to  Cart </button>
        </div>`

            container.appendChild(card)

        }
    }
    else if (Title.title !== searc) {
        alert(`Not Availabel  `)

        container.innerHTML = ``;

        for (let i = 0; i < foodDetail.length; i++) {

            let card = document.createElement("div");

            card.className = "card col-12 col-sm-3 col-md-3  col-lg-3 col-xxl-3 ms-xxl-5 ms-lg-5 ms-md-4 ms-sm-2 ";

            card.innerHTML = `<img src=${foodDetail[i].Img}  class="img img-fluid "  style="height: 300px;" height="60"  class="card-img-top" alt="...">
       <div class="card-body  container-fluid   ">
         <h5 class="card-title">${foodDetail[i].title}</h5>
         <p class="card-text">${foodDetail[i].prise}</p>
         <p   class="count" ></p>
         <button   class="btn w-100 btn-primary  add-to-cart"  data-index="${i}">Add  to  Cart </button>
       </div>`

            container.appendChild(card)


        }

    }  
    
 search = searc.slice(0, 3);
 Title = foodDetail.filter(t => t.title.slice(0, 3).toLowerCase() === search);
    if(Title.length>0){
        let card = document.createElement("div");

        card.className = "card col-12 col-sm-3 col-md-3  col-lg-3 col-xxl-3 ms-xxl-5 ms-lg-5 ms-md-4 ms-sm-2 ";

        card.innerHTML = `<img src=${Title[i].Img}  class="img img-fluid "  style="height: 300px;" height="60"  class="card-img-top" alt="...">
    <div class="card-body  container-fluid   ">
      <h5 class="card-title">${Title[i].title}</h5>
      <p class="card-text">${Title[i].prise}</p>
      <p   class="count" ></p>
      <button   class="btn w-100 btn-primary  add-to-cart"  data-index="${i}">Add  to  Cart </button>
    </div>`

        container.appendChild(card);
    }  
    
});








//Add to cart btn
//Add   To  Cart    Logics
container.addEventListener("click", (e) => {

    if (e.target.classList.contains("add-to-cart")) {
        let index = Number(e.target.getAttribute("data-index"));
        let item = foodDetail[index];

        let userShoping = JSON.parse(sessionStorage.getItem("userShoping") || "[]");
        let Find = userShoping.findIndex(d => d.Img === item.Img);

        let quantity;
        if (Find !== -1) {
            userShoping[Find].quantity += 1;
            quantity = userShoping[Find].quantity;
        } else {
            let data = {
                Img: item.Img,
                title: item.title,
                prise: item.prise,
                quantity: 1
            };
            userShoping.push(data);
            quantity = 1;
        }

        sessionStorage.setItem("userShoping", JSON.stringify(userShoping));

        let count = e.target.parentElement.querySelector(".count");
        count.innerHTML = "Quantity : " + quantity;

        // Update cart item count
        let btnItem = document.querySelector("#Items");
        let total = userShoping.reduce((sum, item) => sum + item.quantity, 0);
        btnItem.innerHTML = `Items : ${total}`;
    }
});

