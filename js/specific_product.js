import { fetchData } from "./utils/fetchData.js";

let queryString = document.location.search;
const params = new URLSearchParams(queryString);
const paramID = params.get("id");

if (paramID > 9) {
  location.replace("index.html");
}


let productsContainer = document.querySelector(".products_row");

const showProducts = (data) => {
  data.map((value, index) => {
    if(paramID == index)
    {
    productsContainer.innerHTML += `<div class="card card_main">
                    <div class="card-image">
                        <a href="shop.html">

                         <img src="./../img/products/${value.image}" alt="Card Image">
                          </a>
                    </div>
                    <div class="card-description">
                        <a href="product_details.html?id=${index}">
                                                 <h2>${value.title}</h2>
                        </a>
                        <p>${value.content} <h3>50$</h3></p>
         <a class="btn-card" href="cart.html?id=${index}">Add to Cart</a>
                    </div>
                </div>`;
    return productsContainer;
    }
  });
  
};


fetchData(productsContainer,showProducts);


