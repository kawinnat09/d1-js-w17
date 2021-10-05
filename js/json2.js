//Create an Object Parse JSON
var myClient = `{ "name": "Nan","age": 19,"city": "Trat"}`;

 //   "car": {
 //      "make": "Toyota",
 //      "Model": "V1",
 //   },

var myPer = JSON.parse(myClient);
document.getElementById(
    "demo"
).innerHTML= `${myPer.name} ${myPer.age} ${myPer.city}`;

document.writeln(`${myPer["name"]} ${myPer["age"]} ${myPer["city"]}`);
document.writeln("<br/>" + myPer.name);
console.log(myPer);