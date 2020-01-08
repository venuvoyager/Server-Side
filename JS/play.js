//Let and const
// Arrow functions or anon functions
// Objects, Properties and Methods
// Arrays, Objects, Ref types
// Arrays and objects are ref types
// Destructuring
// 

const fetchData = callBack => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Venu',
                age: 28,
                designation: 'Tech Lead',
            })
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log("Time is done!");
    fetchData()
        .then(({name, age}) => {
            console.log(name, age);
            return fetchData();
        })
        .then(({name, age}) => {
            console.log(name, age);
        });
}, 2000);
console.log("Hi!");