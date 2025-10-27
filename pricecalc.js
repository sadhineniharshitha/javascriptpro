let price = 2000;
let age;
let discount;
age = parseInt(prompt("Enter your age: "));
let finalPrice;
if (age < 12) {
    discount = 0.5;
    console.log("You are eligible for a 50% discount.");
}
else if (age >= 12 && age <= 60) {
    discount = 0;
    console.log("You are not eligible for a discount.");
}
else if (age > 60) {
    discount = 0.2;
    console.log("You are eligible for a 20% discount.");
} else {
    console.log("Invalid input.");
}
finalPrice = price - (price * discount);
console.log("Original price: " + price);
console.log("Final price after discount: " + finalPrice);