//way to define methods
let person = {
    sayHello: function () {
        console.log('Hi guys');
    }
}

let people = {
    sayHello() {
        console.log('Hello, people!')
    }
}

let girls = {name: 'Jackie', age: 38};
girls.sayHi = () => console.log(`Hi ${girls.name}`)

//build in methods

function solve(arr) {
    let obj = {
        name: 'Ana',
        age: 35,
    }

    console.log(Object.keys(obj))
    console.log(Object.values(obj))
    console.log(Object.entries(obj))
    // iteration through keys
    
    for(let el of Object.entries(obj)){
        console.log(el[0], el[1])
        console.log(el)
    }
}


solve()
