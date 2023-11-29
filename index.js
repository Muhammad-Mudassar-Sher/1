//                                            Task 1
//                                  Scenario 1 - Buying Groceries:
// Function to simulate buying fruits, vegetables, and groceries
function simulateShopping(choice) {
    console.log("Welcome to the Grocery Store!");
    // Initialize variables
    let itemName;
    let itemPrice;
    let totalBill = 0;
    // Check customer's choice
    if (choice.toLowerCase() === "fruits") {
        itemName = "Apples";
        itemPrice = 200;
        totalBill += itemPrice;
    }
    else if (choice.toLowerCase() === "vegetables") {
        itemName = "Carrots";
        itemPrice = 75;
        totalBill += itemPrice;
    }
    else {
        itemName = "Rice";
        itemPrice = 350;
        totalBill += itemPrice;
    }
    // Display selected item and price
    console.log(`You selected ${choice}: ${itemName}`);
    console.log(`Price per unit: RS${itemPrice.toFixed(2)}`);
    // Display total bill
    console.log(`\nTotal Bill: RS${totalBill.toFixed(2)}`);
}
// Simulate buying fruits
simulateShopping("Fruits");
// Simulate buying vegetables
simulateShopping("Vegetables");
// Simulate buying groceries
simulateShopping("Groceries");
//                           Scenario 2 - Checking Discounts:
// Function to simulate buying fruits, vegetables, and groceries with discounts
function simulateShoppings(choice, quantity) {
    console.log("Welcome to the Grocery Store!");
    // Initialize variables
    let itemName;
    let itemPrice;
    let totalBill;
    // Check customer's choice
    if (choice.toLowerCase() === "fruits") {
        itemName = "Apples";
        itemPrice = 200;
        totalBill = itemPrice * quantity;
    }
    else if (choice.toLowerCase() === "vegetables") {
        itemName = "Carrots";
        itemPrice = 75;
        totalBill = itemPrice * quantity;
    }
    else {
        itemName = "Rice";
        itemPrice = 350;
        totalBill = itemPrice * quantity;
    }
    // Display selected item and price
    console.log(`You selected ${choice}: ${itemName}`);
    console.log(`Price per unit: Rs${itemPrice.toFixed(2)}`);
    // Display total bill before discount
    console.log(`Total Bill before discount: Rs${totalBill.toFixed(2)}`);
    // Apply discount based on the total bill amount
    if (totalBill > 2000) {
        const discountPercentage = 10;
        const discountAmount = (totalBill * discountPercentage) / 100;
        totalBill -= discountAmount;
        console.log(`Applied ${discountPercentage}% discount!`);
    }
    else if (totalBill > 1000) {
        const discountPercentage = 5;
        const discountAmount = (totalBill * discountPercentage) / 100;
        totalBill -= discountAmount;
        console.log(`Applied ${discountPercentage}% discount!`);
    }
    else {
        console.log("No discount applied.");
    }
    // Display discounted total bill
    console.log(`\nDiscounted Total Bill: Rs${totalBill.toFixed(2)}`);
}
// Simulate buying fruits with a quantity of 3
simulateShoppings("Fruits", 3);
// Simulate buying vegetables with a quantity of 2
simulateShoppings("Vegetables", 2);
// Simulate buying groceries with a quantity of 1
simulateShoppings("Groceries", 1);
//                     Scenario 3 - Checkout Process:
import inquirer from 'inquirer';
// Function to simulate the checkout process
async function simulateCheckout(totalBill) {
    console.log("Checkout Process:");
    // Available payment methods
    const paymentMethods = ["Credit Card", "Debit Card", "Cash"];
    // Outer loop to ask for the preferred payment method
    let selectedPaymentMethod = null;
    while (selectedPaymentMethod === null) {
        console.log("\nSelect a Payment Method:");
        // Inner loop to display payment options
        const paymentQuestion = {
            type: 'list',
            name: 'chosenPaymentMethod',
            message: 'Choose a payment method:',
            choices: paymentMethods,
        };
        const answers = await inquirer.prompt([paymentQuestion]);
        selectedPaymentMethod = answers.chosenPaymentMethod;
    }
    // Display confirmation message based on the selected payment method
    console.log(`\nYou have chosen to pay with ${selectedPaymentMethod}.`);
    if (selectedPaymentMethod === "Cash") {
        console.log("Please prepare the exact amount for payment.");
    }
    else {
        console.log("Thank you for your payment!");
    }
    // Display the final receipt
    console.log(`\nTotal Bill: Rs${totalBill.toFixed(2)}`);
    console.log("Thank you for shopping with us!");
}
// Simulate the checkout process with a total bill of $30
simulateCheckout(30);
//                                         task 2
//                                  Scenario 1: Sum numbers
// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}
// Example usage of the add function
const result = add(5, 7);
console.log(`The sum is: ${result}`);
//                                Scenario 2: Check Even or Odd
// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    }
    else {
        return `${number} is odd.`;
    }
}
// Example usage of the checkEvenOrOdd function
const result1 = checkEvenOrOdd(8);
const result2 = checkEvenOrOdd(15);
console.log(result1); // Output: 8 is even.
console.log(result2); // Output: 15 is odd.
//                                     Scenario 3: Calculate Area:
// Function to calculate the area of a rectangle
function calculateArea(width, height) {
    const area = width * height;
    return area;
}
// Example usage of the calculateArea function
const width = 5;
const height = 8;
const area = calculateArea(width, height);
console.log(`The area of the rectangle with width ${width} and height ${height} is: ${area}`);
//                                    Scenario 4: String Reversal
// Function to reverse a given string
function reverseString(inputString) {
    // Convert the string to an array of characters, reverse it, and then join the characters back into a string
    const reversedString = inputString.split('').reverse().join('');
    return reversedString;
}
// Example usage of the reverseString function
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);
//                                   Scenario 5: Temperature Conversion:
// Function to convert temperature from Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
// Example usage of the convertCelsiusToFahrenheit function
const celsiusTemperature = 25;
const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature} degrees Celsius is equal to ${fahrenheitTemperature.toFixed(2)} degrees Fahrenheit`);
//                                     task 3
//                                Scenario 1 - Modify Array with Methods:
// Initialize an array with some initial elements
let myArray = [1, 2, 3, 4, 5];
// Demonstrate the usage of array methods
// push: Add new elements to the end of the array
myArray.push(6, 7);
console.log("After push:", myArray);
// pop: Remove the last element from the array
const poppedElement = myArray.pop();
console.log("After pop:", myArray);
console.log("Popped element:", poppedElement);
// shift: Remove the first element from the array
const shiftedElement = myArray.shift();
console.log("After shift:", myArray);
console.log("Shifted element:", shiftedElement);
// unshift: Add new elements to the beginning of the array
myArray.unshift(-2, -1, 0);
console.log("After unshift:", myArray);
//                                       Scenario 2 - Subarray Creation
// Initialize an array with some initial elements
let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Demonstrate the usage of splice and slice array methods
// splice: Create a subarray by removing elements from the original array
const removedElements = originalArray.splice(2, 3); // Remove 3 elements starting from index 2
console.log("Original Array after splice:", originalArray);
console.log("Removed Elements:", removedElements);
// slice: Create a subarray without modifying the original array
const subArray = originalArray.slice(1, 4); // Get elements from index 1 to (4-1)
console.log("Original Array after slice:", originalArray);
console.log("Subarray created by slice:", subArray);
