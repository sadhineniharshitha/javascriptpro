let promptinput = prompt("Enter your total amount: ");
let amount = Number(promptinput);
let discount;

if (amount < 1000) {
    console.log("You are not eligible for a discount.");
    discount=0;
} 
else if (amount >= 1000 && amount <= 2000) {
    console.log("You are eligible for a 10% discount.");
    discount=0.10;
} 
else if (amount > 2000 && amount <= 5000) {
    console.log("You are eligible for a 20% discount.");
    discount=0.20;
} 
else if (amount > 5000) {
    console.log("You are eligible for a 30% discount.");
    discount=0.30;  
} 
else {
    console.log("Invalid input.");
}
console.log("Original amount: " + amount);
let discountAmount, finalAmount;
discountAmount = amount * discount;
finalAmount = amount - discountAmount;
console.log("Bill Summary");
console.log("Discount amount: " + discountAmount);
console.log("Final amount after discount: " + finalAmount);