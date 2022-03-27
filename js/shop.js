import { fetchData } from "./utils/fetchData.js";

let productsContainer = document.querySelector(".products_row");
let queryString = document.location.search;
const params = new URLSearchParams(queryString);
const paramCat = params.get("cat").trim().toLowerCase();

let heading = paramCat.toUpperCase();


document.querySelector(".section-heading").innerHTML = heading;

if (
  paramCat == "bedroom" ||
  paramCat == "bathroom" ||
  paramCat == "kitchen" ||
  paramCat == "shop"
) {


  const showProducts = (data) => {
    data.map((value, index) => {
      if (paramCat == value.cat || value.cat == "shop") {
        productsContainer.innerHTML += `<div class="card card_main">
                      <div class="card-image">
                          <a href="shop.html?cat=${value.cat}">
  
                           <img src="./../img/products/${value.image}" alt="${value.title}">
                            </a>
                      </div>
                      <div class="card-description">
                          <a href="product_details.html?id=${index}">
                                                   <h2>${value.title}</h2>
                          </a>
                          <p>${value.content} </p>
                          <a href="product_details.html?id=${index}" class="btn-card">Details</a>
                      </div>
                  </div>`;
        return productsContainer;
      }
    });
  };

  fetchData(productsContainer,showProducts);
} else {
  location.replace("index.html");
}
