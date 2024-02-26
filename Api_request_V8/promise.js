const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task 
    // DB calls, cryptography,network

    setTimeout(function() {
        console.log("async task is completed")
        resolve()
    }, 1000);
})

promiseOne.then(function() {
    console.log("promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function() {
    console.log("promise 2 is consumed");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "sansar", email: "st9889477@gmail.com" })
    }, 1000)
})
promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "sansar", password: "987" })
        } else {
            reject('Error something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The promise either resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "987" })
        } else {
            reject('Error:js went wrong')
        }
    }, 1000)
})

async function consumedFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumedFive();


// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:" + error)
//     }
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => { console.log(error) })