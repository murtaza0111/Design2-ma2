import { data } from './data.js'

export function fetchData(productsContainer,showProducts) {
  productsContainer.innerHTML = "<h2>fetching products...</h2>";
  try {
    let result =  data;
    productsContainer.innerHTML = "";
    if (result[0].title === undefined) {
      productsContainer.innerHTML = "<h2>No Product Found!!!</h2>";
      return;
    }
    showProducts(result);
  } catch (error) {
    showMessage(productsContainer, error, "red");
  }
}


