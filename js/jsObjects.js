var myName = {
    name: "Nan",
    age: 19,
    city: "Trat"
};
myName.name = "K";
myName["age"] = 19;
document.getElementById("demo").innerHTML= `${myName.name} ${myName.age} ${myName.city}`;
document.writeln(`${myName["name"]} ${myName["age"]}`);