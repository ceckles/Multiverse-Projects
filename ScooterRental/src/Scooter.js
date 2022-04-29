class Scooter {
    constructor(id,fullCharged){
        this.id = id
        this.fullCharge = fullCharged;
        this.maxRange = 32;
        this.currentMiles = 0;
    }
    //Charge when added back to station
    async charge(){
        //console.log('Starting Charge');
        await new Promise(resolve => setTimeout(resolve, 2000)); //wait 2 seconds
        //console.log('Charge complete');
        this.setChargeStatus = true;
    }
    //Incremend the scooter miles to simulate battery drain
    setCurrentMiles(miles){
        if((this.currentMiles + miles) <= this.maxRange){
            this.currentMiles += miles;
        }else{
            this.setCurrentMiles = this.maxRange;
        }
    }
    //Toggle the Charge state
    setChargedStatus(status){
        if(typeof(status) === 'boolean'){
            this.fullCharge = status;
        }else{
            throw new Error('Charge Status needs to be T/F');
        }
    } 
}
module.exports = Scooter;