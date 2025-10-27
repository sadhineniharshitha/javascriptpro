
let rating = "excellent";     
let experience = 6;           
let department = "Sales";     


let bonusPercent = 0;


if (rating.toLowerCase() === "excellent" && experience > 5) {
  bonusPercent = 20;
} else if (rating.toLowerCase() === "good" && experience > 3) {
  bonusPercent = 10;
} else if (rating.toLowerCase() === "average") {
  bonusPercent = 5;
}


if (department.toLowerCase() === "sales") {
  bonusPercent += 2;
}


console.log("Bonus percentage: " + bonusPercent + "%");