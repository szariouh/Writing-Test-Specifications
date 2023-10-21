// Unit Tests:

// 1. A function called "multiplication" that returns the product of the two input numbers.
// Expect multiplication(2, 3) to be a number
// Expect multiplication(2, 3) to be equal to 6
// Expect multiplication(0, 7) to be equal to 0.
// Expect multiplication(-2, -3) to be equal to 6.
// Expect multiplication(2.5, 4) to be equal to 10.0.
// Expect multiplication("a", 3) to be an error
// Expect multiplication(2, "b") to be an error.

// Unexpected inputs, such as non-numeric values, should result in an error.
// The function should handle both positive and negative numbers.
// The function should handle decimal numbers appropriately.

// 2. A function called "concatOdds" takes two arrays of integers as arguments. It should 
// return a single array that only contains the odd numbers, in ascending order, 
// from both of the arrays.

// "concatOdds" Function:

// Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array.
// Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be equal to [-1, 1, 3, 9, 15].
// Expect concatOdds([2, 4, 6], [8, 10, 12]) to be an empty array.
// Expect concatOdds([1, 3, 5], [5, 3, 1]) to be equal to [1, 1, 3, 3, 5, 5].

// The function should return an array.
// It should return an array containing only odd numbers.
// The odd numbers should be in ascending order.
// It should handle arrays with no odd numbers appropriately.


// Functional Tests:

// A shopping cart checkout feature that allows a user to check out as a guest (without an account),
//  or as a logged-in user. They should be allowed to do either, but should be asked if they want 
// to create an account or log in if they check out as a guest.

// Functional Test for Shopping Cart Checkout Feature:

//When a user with an empty cart attempts to check out as a guest, they should be informed 
// that the cart is empty and prompted to add items to their cart.

//When a user with items in their cart proceeds to checkout as a guest, they should be presented 
// with the option to enter their shipping information.

// When a user with items in their cart chooses to create an account during the checkout process, 
// they should be guided through the account creation process and then asked for shipping information.

// When a user with items in their cart chooses to log in during the checkout process, they should be 
//prompted to log in and then asked for shipping information.

// During the checkout process, the user should see a summary of their cart with item details, quantities, 
//and total price at each step.

// The user should be prompted to confirm their order and provide payment information before the order is 
//finalized.

// If the user chooses to check out as a guest, they should be asked if they want to create an account at 
// the end of the checkout process.

// Handling of empty carts should be tested.
// The ability to create an account or log in during checkout should be tested.
// The order summary and payment confirmation should be part of the process.
// Consider testing different payment methods, shipping options, and edge cases.

