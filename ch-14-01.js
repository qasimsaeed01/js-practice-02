let age = prompt("what is your age?");
let grade = prompt("Grade?  Eg: a , b ,c");
let gpa = prompt("GPA?");

if (age >= 17){

     if (grade == "a" || grade == "b" || grade == "c") {

    if (gpa >= 2 && gpa <= 4) {
        alert("You are eligible for a scholarship!");
    }
    
    else {
        alert("You don't have required GPA.");
    }
     
}

else {
  alert("You don't have required grade");
}


}

else {
  alert("You are UNDER AGED.");
}