
let vehicleType = "truck";     
let speed = 90;                
let roadType = "city";         


let speedLimit = (roadType.toLowerCase() === "highway") ? 80 : 50;


let fine = 0;


if (speed > speedLimit && roadType.toLowerCase() === "highway") {
  fine = 1000;

  
  if (roadType.toLowerCase() === "city") {
    fine *= 2;
  }

 
  if (vehicleType.toLowerCase() === "truck" || vehicleType.toLowerCase() === "bus") {
    fine += fine * 0.5;
  }

  console.log("Fine of ₹" + fine.toFixed(0));
} else if (speed > speedLimit && roadType.toLowerCase() === "city") {
  fine = 1000 * 2;

  if (vehicleType.toLowerCase() === "truck" || vehicleType.toLowerCase() === "bus") {
    fine += fine * 0.5;
  }

  console.log("Fine of ₹" + fine.toFixed(0));
} else {
  console.log("Safe Driving – No Fine.");
}