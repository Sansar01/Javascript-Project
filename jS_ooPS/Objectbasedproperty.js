const User = {
    _email: "sansar@gmail.com",
    _password: "fdkf",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        return this._email = value;
    }
}

const trial = Object.create(User);

console.log(trial.email); // RETURNS: