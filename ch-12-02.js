let sibling = prompt("how many siblings you have ??",);

if (sibling < 2 ){ 
    alert("you have small family"); 
}

else if (sibling >= 2 && sibling <= 3){ 
    alert("you have medium family"); 
}

else if (sibling >= 4){ 
    alert("you have large family"); 
}

else { 
    alert("you are single"); 
}