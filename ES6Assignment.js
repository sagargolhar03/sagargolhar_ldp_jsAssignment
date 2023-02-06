// convert function to one line
// const printName = (name) => {
//     return “Hi” + name;
// }


const printName = (name) => 'Hi' + name;
console.info(printName("Sagar"));

// Rewrite the following code using template literals

// const printBill = (name, bill) => {
//     return “Hi “ + name + “, please pay: “ + bill;
// }

const printBill = (name, bill) => {
    return `Hi ` + name + `, please pay: ` + bill;
}
console.info(printBill('sagar', '200'))


// Modify the following code such that the object properties are destructured and logged.

// const person = {
//     name: “Noam Chomsky”,
//     age: 92
// }

// let name = person.name;
// let age = person.age;
// console.log(name);
// console.log(age);


const person = {
    name: 'Noam Chomsky',
    age: 92
}


const {name,age} = person;


console.log(name);
console.log(age);
