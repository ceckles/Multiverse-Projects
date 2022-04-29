const Scooter = require('../src/Scooter');
class User{
    constructor(firstName, lastName,username,email, birthDate, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.appDownloaded = false;
        this.scooter = null;
    }

    //Return User Full Name
    getFullName(){
        return this.firstName +" "+ this.lastName;
    }

    //Change isDownloaded status
    setAppDownloaded(status){
        if(typeof(status) === 'boolean'){
            this.appDownloaded = status;
        }else{
            throw new Error('Download Status needs to be T/F');
        }
    }

    //Is App Downloaded
    isAppDownloaded(){
        return this.appDownloaded;
    }

    //Check is user is of age to rent a scooter
    static isOfAgeToRent(dob){
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    //Check is user email is valid
    static isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    //add scooter to users possession
    addScooter(sctr){
        this.scooter = sctr;
    }
}
module.exports = User;