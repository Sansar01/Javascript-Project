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
    console.log(this.Qualification);
}

const user1 = new CreateUser("Tiwari", "B.sc");
const user2 = CreateUser("Kumar", "MBA");

user1.degree();
user1.print();