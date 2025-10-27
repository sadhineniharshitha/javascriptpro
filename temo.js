let temp;
temp=parseInt(prompt("Enter the Temp"));
if(temp>10){
console.log('Its freezing cold, wear a jacket.');
}
else if(temp<10&&temp>24){
    console.log('Cool weather,perfect for outdoor activities')
}
else if(temp>25&&temp<35){
    console.log('Warm ,stay hydrated');
}
else if(temp>35){
    console.log('Its too hot ,avoid going out in the afternoon');
}
else{
    console.log('invalid input')
}