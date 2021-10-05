//Json Object
var myName = {
    "name": "Nan",
    "age": 19,
    "city": "Trat",
    "car": null
};

//myName.name = "K";
//myName["age"] = 19;
document.getElementById(
    "demo"
).innerHTML= `${myName.name} ${myName.age} ${myName.city} ${myName.car}`;
document.writeln(`${myName["name"]} ${myName["age"]} ${myName["car"]}`);