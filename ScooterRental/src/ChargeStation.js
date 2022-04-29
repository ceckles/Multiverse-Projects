const Scooter = require('../src/Scooter');
const User = require('../src/User');
class ChargeStation {
    static location = [];

    constructor(locationName, maxScooter){
        this.locationName = locationName;
        this.maxScooter = maxScooter;
        this.scooterList = [];
        this.constructor.location.push(this);
        this.maintenance = [];
    }

    //Add scooter to avalable scooters for rent
    addScooter(scooter){
        if(this.scooterList.length + 1 <= this.maxScooter){
            this.scooterList.push(scooter);
        }else{
            throw new Error("Scooter Station is full");
        }
    }

    //User requests to rent a scooter
    rentScooter(user){
        //if((user.scooter) instanceof Scooter){ throw new RentError('Can only rent one scooter')}
        //if(scooterList.length === 0){ throw new Error("No Scooters at this station")}

        const found = this.scooterList.find(scooter =>{
            return scooter.fullCharge == true;
        });

        const index = this.scooterList.indexOf(found);
        this.scooterList.splice(index, 1);

        return found;
    }
    //Can't Rent is User has a scooter already
    cantRent(user){
        if(user.scooter != null){
            return false;
        }else{ return true;}
    }

    //Charge user when added back to a station
    chargePayment(scooterID, user){
        //TODO: Charge user.
        console.log( user.getFullName() + " $20 Charged for Scooter rental ID: "+ scooterID);
    }

    //Return Scooter to station
    returnScooter(scooter, user){
        this.scooterList.push(scooter);
        const index = this.scooterList.indexOf(scooter);
        // console.log(index);
        this.scooterList[index].charge()
        user.scooter = null;
        this.chargePayment(scooter.id, user);
    }

    //Add Scooter to Maintenance list when flagged.
    needMaintenance(scooter){
        const index = this.scooterList.indexOf(scooter);
        const limboScooter = this.scooterList[index]
        this.maintenance.push(limboScooter);
        this.scooterList.splice(index,1);
        console.log('scooter added to needMaintenance')
    }
    logIn(username, password){
        //login from Main system can do within here by creating Register user obj array or from "Main scooterRental".
    }
}

module.exports = ChargeStation;