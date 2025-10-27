let roomType = "Deluxe";
let nights = 6;
let rating = 3.5;
let baseRate = 0;
if (roomType.toLowerCase() === "standard") {
    baseRate = 1000;
} else if (roomType.toLowerCase() === "deluxe") {
    baseRate = 2000;
} else if (roomType.toLowerCase() === "suite") {
    baseRate = 3000;
} else {
    console.log("Invalid room type.");
}
let total = baseRate * nights;
if (nights > 5) {
    total -= total * 0.05;
}
console.log("Total payable amount: ₹" + total.toFixed(2));

