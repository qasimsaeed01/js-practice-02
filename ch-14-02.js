let price = prompt("Enter the price of the product: Rs.");

let membershipStatus = prompt("Enter your membership status (Gold/Platinum): ");


if (membershipStatus === "Gold" || membershipStatus === "Platinum") {

  if (price >= 1000) {
    alert("Aapko discount mil raha hai!");
    
  }             else {
    alert("Your purchase amount is too low. You are not eligible for a discount.");
  }
} 
else {
  alert("You are not a Gold or Platinum member. You are not eligible for a discount.");
}