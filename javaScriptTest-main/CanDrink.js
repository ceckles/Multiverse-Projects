//basic function to check a users age and determin if they are able to drink.
//just a test function to check if a user is of age to drink.

//Custom Person Class 
/* class Person {
    constructor(firstName,lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    let user = new Person("mike","olsen",);
} */

//Create Single user to test
const USER = {
    firstName: "Mike",
    lastName: "Olsen",
    age: 17
}

//Multiple User test.
const USERS = {
    Mike:{
        age: 22
    },
    John:{
        age: 18
    },
    Chad:{
        age: 37
    },
    Brian:{
    }

}
//Function to check if is valid person for eval return if not.
function canDrink(user){
    //Check for null and valid int.
    if (user?.age == null && Number.isInteger(user?.age) == false){ console.log("You are not a person"); return }

    //eval passed move to checking age.
    const response = canDrinkResponse(user.age);
    console.log(`Can ${USER.firstName} drink: ${response}`);
    return
}

//Check age and return proper response to age eval.
function canDrinkResponse(age){
    if (age < 18) return "Nope 👶"
    if (age < 21) return "Not in the US 😢"
    return "Yes 🍻"
}

//Call can drink function to check if user can drink.
canDrink(USER);

//Look to check all users in the array for appropreate age.
//console.log(USERS)
for (user in USERS){
    //console.log(USERS[user].age);
    canDrink(USERS[user]);
}