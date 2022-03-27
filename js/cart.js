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
    productsContainer.innerHTML += `<div class="card card_main products_row_cart">
                    <div class="card-image">
                        <a href="shop.html">

                         <img src="./../img/products/${value.image}.jpg" alt="Card Image">
                          </a>
                    </div>
                    <div class="card-description">
                        <a href="product_details.html?id=${index}">
                                                 <h2>${value.title}</h2>
                        </a>
                        <p>${value.content} 50$</p>
                    </div>
                   
                </div>
                <br />
                <br />
                <div class="totalRecipt">
         
              <h2>Bill</h>
              <hr />

              <table style="width:100%;"> 
              <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                </tr>
                <tr>
                  <td>${paramCat}</td>
                  <td>${value.title}</td>
                  <td>${value.price}</td>
                </tr>
                </thead>
              <tbody>
                <td></td>
              </tbody>
              </table>
         </div>
                `;
    return productsContainer;
    }
  });

};


  
fetchData(productsContainer,showProducts);