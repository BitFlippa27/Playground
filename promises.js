// states -> resolved(fullfilled), rejected, pending(default state)

/*
const promise = new Promise((resolve, reject) => { // resolve and reject are functions to change the state
    setTimeout(() => resolve(2), 1000);
});

const errorPromise = new Promise((resolve, reject) => { // resolve and reject are functions to change the state
    setTimeout(() => reject(new Error("ERROR")), 1000);
});

console.log(promise);

setTimeout(() => console.log("setTimeout", promise), 1500);

//better way

//then = resolved, catch = rejected
promise.then(console.log).catch(error => console.log("Oh No" + error)); // waiting for the promise to settle (from pending to resolved)

const resolvedPromise = Promise.resolve(27);
console.log(resolvedPromise);
resolvedPromise
    .then(value => value * 1)
    .then(value => value - 27)
    .then(value => {
        throw new Error("Rejected Promise Error")
    })
    .then(console.log) // never reaches this part
    .catch(error => {
        console.log("Oh no" + error)
        return 10;  //rejected promise returns a promise with 10
    })
    .then(console.log)
    .finally(() => console.log("I will always run mofo"));


//waits untill all promises are resolved
Promise.all([   //returns an promise as array with all the values from all promises
    Promise.resolve(34),
    Promise.resolve(33),
    new Promise((res, rej) => setTimeout(() => res(5),1000))
]).then(console.log).catch(console.log);

Promise.race([   //return the fastest resolved/settled promise
    Promise.resolve(34),
    Promise.resolve(33),
    new Promise((res, rej) => setTimeout(() => res(5),1000))
]).then(console.log).catch(console.log);

*/
//async await

async function tester() { //async func returns promise
    const value = await new Promise((res, rej) => setTimeout(() => res(369), 1000));
    console.log(value);
}

tester();


//catching errors

async function catchingError() { //async func returns promise
    try {
        const value = await new Promise((res, rej) => {
            setTimeout(() => rej(new Error("fokin error")), 1000);
        });
        console.log(value);
    } catch (error) {
        console.log("Oh no " + error);
    }
}

catchingError();

//other way of catching errors

async function catchingError2() { //async func returns promise
    return await new Promise((res, rej) => {
        setTimeout(() => rej(new Error("fokin error")), 1000);
    });
}

catchingError2().then(console.log).catch(error => console.log("Oh no2 " + error));
