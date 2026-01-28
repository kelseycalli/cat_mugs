/* Goals:

payment details validation:
    prevent default on submission
    if numbers entered do not meet submission criteria; validation message
    submission criteria:
        name can only be letters
        card number must only be 16 digits (UI push; can we put spaces between every 4?)
        expiry date only 2 numbers in each
        cvc number can only be 3 numbers
    clear form after submission and pop up with success!
    push: payment details only visible once place order clicked?

shopping cart:
    click add to card- adds item to cart
    if item already in cart, add 1 to quantity
    control quantities with + or -
    must not go below 0
    update price with quantity
    update total
    remove buttons to remove item from cart
    show amount of items in cart next to shopping cart icon in navbar
    

*/
// let cart = [
//     {name: 'Cat Mug 1', price: 10, quantity: 2},
//     {name: 'Cat Mug 2', price: 15, quantity: 3},
//     {name: 'Cat Mug 3', price: 20, quantity: 4},
//     {name: 'Cat Mug 4', price: 25, quantity: 5},
// ];

// function increment(name, quantity) {
//     cart.find(item => item.name == name).quantity += quantity;
// }

// function showCart() {
//     const shoppingCart = document.getElementById('shopping-cart');
//     for (const item of cart) {
//         shoppingCart.innerHTML += `<div class="row my-1">
//                             <div class="col-3 offset-1">${item.name}</div>
//                             <div class="col-3">£${item.price}</div>
//                             <div class="col-4">
//                                 <button id="decrement-btn" type="button" class="btn">-</button>
//                                 <span id="counter-value" class="fw-bold mx-2 text-center">${item.quantity}</span>
//                                 <button id="increment-btn" type="button" class="btn" onClick = >+</button>
//                                 <button id="remove-btn" class="btn" type="button">Remove</button>
//                             </div>
//                         </div>`
//     }
// }

// showCart();



// Card validation
// Get form
const cardForm = document.getElementById('cardForm');

cardForm.addEventListener('submit', function (event) {
    // Prevent default
    event.preventDefault();
    // Get inputs for each field
    const fullName = document.getElementById('fullName');
    const cardNumber = document.getElementById('cardNumber');
    const expMonth = document.getElementById('expMonth');
    const expYear = document.getElementById('expYear');
    const cvcNumber = document.getElementById('cvcNumber');
    // Get divs for invalid feedback
    const nameFeedback = document.getElementById('name-feedback');
    const cardNumberFeedback = document.getElementById('card-number-feedback');
    const monthFeedback = document.getElementById('month-feedback');
    const yearFeedback = document.getElementById('year-feedback');
    const cvcFeedback = document.getElementById('cvc-feedback');

    function check16Digits(input, feedback, message) {
        if (input.value.length != 16) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            feedback.textContent = message;
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            feedback.textContent = "";
        }
    };
    
    function checkValid(input, feedback, message) {
        if (input.value == "") {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            feedback.textContent = message;
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            feedback.textContent = "";
        }
    };

    checkValid(fullName, nameFeedback, 'Please input your full name as stated on your card.');
    checkValid(cardNumber, cardNumberFeedback, 'Please input your 16 digit card number.');
    checkValid(expMonth, monthFeedback, 'Please input your 2 digit card expiry month number.');
    checkValid(expYear, yearFeedback, 'Please input your 2 digit card expiry year number.');
    checkValid(cvcNumber, cvcFeedback, 'Please input your 3 digit card CVC number.');
    check16Digits(cardNumber, cardNumberFeedback, 'Your card number should be 16 digits long.');
});



