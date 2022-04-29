class Airport{
    static airports = [];

    constructor(name){
        this.name = name;
        this.planeList = [];
        this.constructor.airports.push(this);
    }
    addPlane(plane){

        this.planeList.push(plane);
    }
    land(plane){
        this.planeList.push(plane);
    }
    takeoff(plane){
        const index = this.planeList.indexOf(plane);
        //console.log(index);
        this.planeList.splice(index, 1);
    }
}
module.exports = Airport;