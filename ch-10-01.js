let bike = prompt("kia aap ke paas bike hai?");
if (bike) {
    alert("wow! Aap ke paas bike hai");
    let model = prompt("Aapki bike kitni purani hai? Kya aap usse rozana chalaate hain?");
    if (model <= 2018) {
       alert("Aapki bike bohut purani hai");
    }
    else {
       alert("Aapki bike nayi hai");
    }
}
else if(bike == "nahi") {
    alert("Aapke paas bike nahi hai");
}
   