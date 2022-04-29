Use Case:
- 1.As a User, I want to be able to register for account in app
- 2.As a User, I want to be able to rent a scooter at a specified location.
- 3.As a User, I want to be able to return a scooter and see what I was charged. 

```
class User {
    firstName: String
    lastName: String
    userName: String
    email: String
    dob: String
    appDownloaded: bool
    scooter: Scooter
    +GetFullName()
    +setAppDownload()
    +{static}isOfAgeToRent(dob)
    +{static}isEmailValid(email)
    +addScooter(scooter)
}

class Scooter {
    id: int
    fullCharge: bool
    maxRange: int
    currentMiles: int
    +{async}charge()
    +setCurrentMiles(miles:int)
    +setChargeStatus(status:bool)
}

class ChargeStation {
    +{static}location: Array
    locationName: String
    maxScooter: int
    scooterList: Array:Scooter
    +rentScooter(user)
    +cantRent(user)
    +chargePayment(user)
    +returnScooter(scooter,user)
}
```