function animalType(animal) {

    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
    }
}
animalType("dog");
animalType("snake");
animalType("cat");