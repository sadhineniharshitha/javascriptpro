
let cartAmount = 1000;             
let membership = "gold";           
let hasCoupon = true;              


let discountPercent = 0;

if (membership.toLowerCase() === "silver") {
  discountPercent = 5;
} else if (membership.toLowerCase() === "gold") {
  discountPercent = 10;
} else if (membership.toLowerCase() === "platinum") {
  discountPercent = 15;
}

if (hasCoupon) {
  discountPercent += 5;
}

let discountAmount = cartAmount * (discountPercent / 100);
let finalAmount = cartAmount - discountAmount;

console.log("Final payable amount: ₹" + finalAmount.toFixed(2));