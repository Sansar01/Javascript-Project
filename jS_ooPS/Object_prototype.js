const User = {
        username: "Sansar Tiwari",
        Qualification: "Bachelor of technology"
    }
    //console.log(User);


function CreateUser(username, qualification) {
    this.username = username;
    this.Qualification = qualification;
}

CreateUser.prototype.degree = function() {
    this.Qualification = "Please add new degree"
}
CreateUser.prototype.print = function() {
    console.log(CreateUser.prototype);
    console.log(this.username+"  "+this.Qualification);
}

const user1 = new CreateUser("Tiwari", "B.sc");
const user2 = CreateUser("Kumar", "MBA");

user1.degree();
user1.print();


let Teacher = {
    isAvailable: "mayBe"
}

let TeachingSupport = {
    login:"yes",
    salary:5000,
    __proto__:Teacher
}
let student = {
    attendance:10,
    college:"Vindhya Institute of technology and science"
}

Object.setPrototypeOf(student,TeachingSupport)
console.log("   "+TeachingSupport.isAvailable)
console.log("set prototype of "+student.salary);

let person  = "KanishkSinghMaurya    ";

String.prototype.trueLength = function()
{
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}
person.trueLength()