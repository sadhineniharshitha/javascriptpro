let marks = parseInt(prompt("Enter your marks: "));

if (marks >= 90) {
    console.log('Excellent – Grade A.');
}

else if (marks >= 75 && marks < 90) {
    console.log('Good – Grade B.');
}

else if (marks >= 50 && marks < 75) {
    console.log('Average – Grade C.');
}

else if (marks < 50) {
    console.log('Failed – Needs Improvement.');
}