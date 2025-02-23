class Vehicle {
    constructor(vehicleType, vehicleModel, vehicleParts, vehicleFuel) {
        vehicleParts.quality = vehicleParts.engine * vehicleParts.power; // обекта със свойства

        this.type = vehicleType;
        this.model = vehicleModel;
        this.parts = vehicleParts; // частите са обект
        this.fuel = vehicleFuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }6

}

// this -> when in constructor -> object we're currently creating
// this -> when in method -> object on which we're calling the method

let parts = { engine: 6, power: 100 };
// 'new' is used when we want to create new obj from that class -> the constructor is executed
let vehicle = new Vehicle('a', 'b', parts, 200); 
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);