// click with increament number
const firstPlusBtn = document.getElementById('firstPlusBtn');
firstPlusBtn.addEventListener('click', function () {

   let firstInputNumber = getInputNumber('firstInput', 1);
   const singlePrice = productPrice('firstPrice', firstInputNumber, 1219);

})

// first button decrement
const firstMinusBtn = document.getElementById('firstMinusBtn');
firstMinusBtn.addEventListener('click', function () {
   let firstInputNumber = getInputNumber('firstInput', -1);
   productPrice('firstPrice', firstInputNumber, 1219);
});

// second button increament 
const caseIncreaseBtn = document.getElementById('case-increase');
caseIncreaseBtn.addEventListener('click', function () {
   let secondInputNumber = getInputNumber('secondInput', 1);
   const singlePrice = productPrice('secondPrice', secondInputNumber, 59);
})

// second decrement button
const secondMinusBtn = document.getElementById('secondMinusBtn');
secondMinusBtn.addEventListener('click', function () {
   let secondInputNumber = getInputNumber('secondInput', -1);
   productPrice('secondPrice', secondInputNumber, 59);
})

// get input number
function getInputNumber(id, action) {

   let input = document.getElementById(id).value;
   let inputNumber = parseInt(input);
   inputNumber = inputNumber + action;
   if (inputNumber >= 1) {

      document.getElementById(id).value = inputNumber;
      return inputNumber;
   } else {
      return 1;
   }
}

// update single price 
function productPrice(id, inputNumber, price) {
   let productPrice;
   productPrice = inputNumber * price;
   document.getElementById(id).innerText = productPrice;
   // show total price
   showTotalPrice();

}

function showTotalPrice() {
   const phonePrice = getSpanTextToNumber('firstPrice');
   const casePrice = getSpanTextToNumber('secondPrice');
   const subTtotal = phonePrice + casePrice;
   document.getElementById('sub-total').innerText = subTtotal;

   const tax = Math.round(subTtotal * 0.05);
   document.getElementById('tax').innerText = '$' + tax;
   const grandTotal = subTtotal + tax;
   document.getElementById('total').innerText = grandTotal;
}

function getSpanTextToNumber(spanId) {
   const spanText = document.getElementById(spanId).innerText;
   const spanTextToNumber = parseInt(spanText);
   return spanTextToNumber;

}
