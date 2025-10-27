let unit = parseInt(prompt("Enter the units consumed:"));
let total = 0;

if (unit < 100) {
  total = 200; 
  console.log("Minimum charge only.");
} else if (unit >= 100 && unit <= 300) {
  total = unit * 5;
  console.log("Rate of Normal Consumption.");
} else if (unit > 300 && unit <= 500) {
  total = unit * 8; 
  console.log("Apply a higher rate.");
  console.log("Save power, save energy.");
} else if (unit > 500) {
  total = unit * 10 + 200; 
  console.log("High consumption alert.");
} else {
  console.log("Invalid input.");
}

console.log("Total payable amount: ₹" + total.toFixed(2));