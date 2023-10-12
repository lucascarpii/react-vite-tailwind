/*
* This function calculates total price of a new order
* @params {Array} products cartProducts: Array of Objects 
* @return {number} Total price
*/
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach(product => sum += product.price);
  return sum
}