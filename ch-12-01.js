let city = prompt("lia Pakistan mein aap ko kuye shaher pasand hai?")
if (city === "yes"){
    var cName = prompt("kunsa Shaher aap ka fav hai? e.g 'Lahor', 'Peshawar',  'Islamabad'.")
    if (cName === "lahor" && cName === "peshawar" && cName === "islamabad"){
        var bName = prompt("Whether it's a big city (Lahore, peshawar, Islamabad)")
        // else if (bName === "lahor" && bName === "peshawar" && bName === "islamabad"){
        //     alert("Aapke sheher ki khubsurati toh alag hi hai!");
        // }
        // else{
        //     alert("ek to huga es mein")
        // }
    }
    
}
else{
    alert("Es ka matlb pakistan aap ko acha nahi lagta")
}