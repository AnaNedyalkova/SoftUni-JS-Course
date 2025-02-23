function cats(data) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let result = [];

    for(let el of data) {
        let [name, age] = el.split(' ');
        let cat = new Cat(name, age);
        result.push(cat);
    }

    result.forEach(cat => cat.meow());


}
cats(['Mellow 2', 'Tom 5'])