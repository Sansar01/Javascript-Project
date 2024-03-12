// class User {
//     constructor(email, password) {
//             this.email = email;
//             this.password = password;
//         }
//         /**particular properties have their own function getter and setter */
//     get email() {
//         return this._email.toUpperCase();
//     }

//     set email(value) {
//         this._email = value;
//     }

//     get password() {
//         return this._password.toUpperCase();
//     }

//     set password(value) {
//         this._password = value;
//     }
// }

// const user = new User("sansar@gmail.com", "aCvb")

// console.log(user._email); // SANSAR@




///using prototype object

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },

        set: function(value) {
            this._email = value;
        }
    })
}

const value = new User("tiwari@gmial.com", "kdfi");

console.log(value.email); // TIWAR