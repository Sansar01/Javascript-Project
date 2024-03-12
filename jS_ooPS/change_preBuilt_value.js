Math.PI = 512;

console.log(Math.PI)

//console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

const User = {
        name: "sansar",
        age: 36
    }
    //console.log(Object.getOwnPropertyDescriptor(User, "age"));

// Object.defineProperty(User, 'name', {
//     writable: false
// });
// User.name = "Tiwari"

// console.log(Object.getOwnPropertyDescriptor(User, "name"));

// console.log(User.name)

for (let [key, value] of Object.entries(User)) {
    console.log(`${key} : ${value}`);
}