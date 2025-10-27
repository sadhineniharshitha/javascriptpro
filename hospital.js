let age;
age = parseInt(prompt('enter the age'));
let isEmergency = confirm("Is it Emergency? Click OK for Yes, Cancel for No.");

if (isEmergency) {
    console.log("Send to Emergency Room immediately.");
} else {
    if (age < 10) {
        console.log('Pediatric Section.')
    }
    else if (age > 10 && age < 60) {
        console.log('General Section');
    }
    else {
        console.log('Senior Citizen Section');
    }
}