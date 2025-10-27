let ordervalue;
ordervalue = parseInt(prompt('enter the users order value'));
let isPremiumMember = confirm("Are you a premium member? Click OK for Yes, Cancel for No.");

if (isPremiumMember) {
    console.log("Delivery is free for premium members.");
}else{
if (ordervalue < 200) {
    console.log('Delivery not available.')
}
else if (ordervalue > 200 && ordervalue < 500) {
    console.log('delivery fee is 50');
}
else if (ordervalue > 500 && ordervalue < 1000) {
    console.log('delivery fee is 25');
}
else if (ordervalue > 1000) {
    console.log('No Delivery Fee');
}
}