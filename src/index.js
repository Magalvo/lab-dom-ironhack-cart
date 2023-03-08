// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span'); //.innerText;
  const quantity = product.querySelector('.quantity input'); //.value;

  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  const subtotalValue = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArr = [...products]; //converting to an array

  const subTotalValuesArray = productsArr.map(product =>
    updateSubtotal(product)
  );

  const totalValue = subTotalValuesArray.reduce((acc, curr) => acc + curr, 0);
  document.querySelector('#total-value span').innerText = totalValue;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
