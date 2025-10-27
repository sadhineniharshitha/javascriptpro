
let distance = 12;             
let hour = 23;                  
let hasPromoCode = true;        
let fare = 0;
if (distance < 5) {
  fare = 100;                  
} else if (distance <= 15) {
  fare = 200;                  
} else {
  fare = 300;
}


if (hour >= 22 || hour < 5) {
  fare += fare * 0.20;          
}

if (hasPromoCode) {
  fare -= fare * 0.10;          
}


console.log("Final cab fare: ₹" + fare.toFixed(2));