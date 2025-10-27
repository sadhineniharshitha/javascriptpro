let usage = parseFloat(prompt("Enter your monthly data usage in GB:"));
let chosenPlan = prompt("Enter your current plan (Basic Plan, Standard Plan, Premium Plan, Unlimited Plan):");
let recommendedPlan = "";

if (usage < 5) {
  recommendedPlan = "Basic Plan";
} else if (usage >= 5 && usage <= 20) {
  recommendedPlan = "Standard Plan";
} else if (usage > 20 && usage <= 50) {
  recommendedPlan = "Premium Plan";
} else if (usage > 50) {
  recommendedPlan = "Unlimited Plan";
} else {
  console.log("Invalid usage input.");
}

if (recommendedPlan) {
  console.log('Recommended plan based on your usage: ${recommendedPlan}');
  if (chosenPlan !== recommendedPlan) {
    console.log('Alert: Your current plan (${chosenPlan}) may not be optimal.');
    console.log('Consider switching to the ${recommendedPlan} for better value.');
  } else {
    console.log(" Your chosen plan matches your usage well.");
  }
}