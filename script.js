// 1. 
function typeFinder(UserInput) {
    switch(typeof (UserInput)) {
        case "string":
            console.log("This is a string");
            break;
        case "number":
            console.log("This is a number");
            break;
        case "boolean":
            console.log("This is a boolean");
            break;
        case "object":
            console.log("This is a object");
            break;
        default:
            console.log("It is undefined");
    }
}
typeFinder(5);
typeFinder('a');
typeFinder(true);
typeFinder(null);
typeFinder();

// 2.
function ageHumanToDog(humanYears) {
    var dogYears = humanYears * 7;
    console.log(dogYears);
    return dogYears;
}

function ageDogToHuman(DogYears) {
    var HumanYears = DogYears / 7;
    console.log(HumanYears);
    return HumanYears;
}

var choice = parseInt(prompt("Write 1 to calculate your dogs age from human to dog years.\nWrite 2 to calculate your dogs age from dog to human years."));

if(choice == 1) {
    var humanYears = parseInt(prompt("How old is your dog in human Years? "));
    humanYears = ageHumanToDog(humanYears);
}
else if(choice == 2) {
    var DogYears = parseInt(prompt("How old is your dog in dog Years? "));
    DogYears = ageDogToHuman(DogYears);
}else {
    alert("Your input is not valid");
}

// 3. 
function ATM(cash) {
    if(cash == 0) {
        alert("You have no money");
    } else if(cash > 0){
        var userInput = parseInt(prompt("Enter the amount you want to recive: "));
        var moneyLeft = 0;

        if(userInput > cash) {
            alert("Not enough money");
        }else {
            moneyLeft = cash - userInput;
            console.log("You have withdraw these much money: " + userInput)
            console.log("These is the amount left: " + moneyLeft);
        }
        return moneyLeft;
    }else {
        alert("Invalid input!");
    }
}
// Ova e za da se harkodira
// ATM(10000);
var cash = parseInt(prompt("How much money do you have: "));
cash = ATM(cash);






