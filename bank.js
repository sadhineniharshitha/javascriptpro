let income;
income = parseInt(prompt("enter the monthly income"));
if(income < 20000) {
    console.log('the user is not eligible');
}
else if(income > 20000 && income < 50000){
    console.log('the user is eligible for a personal loan');
}
else if(income > 50000){
    console.log('the user is eligible for both personal and home loans.');
}
else{
    console.log('invalid input');
}