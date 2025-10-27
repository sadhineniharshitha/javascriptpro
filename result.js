// Input marks for three subjects
let subject1 = 40;
let subject2 = 30;
let subject3 = 50;

// Count how many subjects are below 35
let failCount = 0;
if (subject1 < 35) failCount++;
if (subject2 < 35) failCount++;
if (subject3 < 35) failCount++;

// Determine result
let result = "";
if (failCount === 0) {
  result = "Passed";
} else if (failCount === 1) {
  result = "Supplementary";
} else {
  result = "Failed";
}

// Calculate average
let average = (subject1 + subject2 + subject3) / 3;

// Determine performance remark
let remark = "";
if (result === "Passed") {
  if (average >= 75) {
    remark = "Excellent performance";
  } else if (average >= 60) {
    remark = "Good performance";
  } else {
    remark = "Satisfactory performance";
  }
} else if (result === "Supplementary") {
  remark = "Needs improvement";
} else {
  remark = "Poor performance";

// Output results
console.log("Result: " + result);
console.log("Average Marks: " + average.toFixed(2));
console.log("Remark: " + remark);
}