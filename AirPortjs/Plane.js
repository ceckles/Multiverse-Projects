//Plane Class
class Plane {
    constructor(flightNumber){
        this.flightNumber = flightNumber;
        this.flightCrew = [];
        this.cabinCrew = [];
        this.passengers = [];
        this.maxWeight = 5000;
        this.currentWeight = 0;
    }
    addFlightCrew(pilot){
        this.flightCrew.push(pilot);
    }
    addCabinCrew(crew){
        this.cabinCrew.push(crew);
    }
    addPassenger(passenger){
        this.passengers.push(passenger);
    }
    getMaxWeight(){
        return this.maxWeight;
    }
    getCurrentWeight(){
        return this.currentWeight;
    }
    addToWeight(weight){
        this.currentWeight += weight;
    }
    subToWeight(weight){
        this.currentWeight -= weight;
    }
}
module.exports = Plane;