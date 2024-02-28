const user = {
        username: "sansar",
        isLogged: 8,
        isSigned: true,
        getuserDetail: function() {
            return this;
        }
    }
    //console.log(user);


function User(username, isLogged, isSigned) {
    this.username = username;
    this.isLogged = isLogged;
    this.isSigned = isSigned;

    this.getUser = function() {
        console.log(`Welcome ${this.username}`)
    }
    return this.getUser()
}

const userOne = User("Tiwari", 9, false);
console.log(userOne);