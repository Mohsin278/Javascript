const accountId = 155223
let accountEmail = "mohsinmanzoor714@gmail.com"
var accountPassword = "19276786"
accountCity = "Shopian"
let accountState;
// If we don't declare the value of variable, it will give output as Undefined as in accountState.

// accountId = 4 we can't change the value of the constant.
accountEmail = "uzma12@gmail.com"
accountPassword = "41414141"
accountCity = "Pulwama"

console.log(accountCity)
/*
prefer not to use var
because of issue in block scope and functional scope
*/
// console.table([accountId, accountEmail, accountPassword, accountCity])


// Practice Session 🤣😁
const firstName = "Mohsin"
const lastName = "Manzoor"
let userId = "mohsin714"
let password = 155223852


// So we can not update or change the value of constant.
// firstName = "Fida"
// lastName = "something"

// But we can change or update the value of Variable which we have declared using let keyword.
userId = "Fida@155"
password = 78367878656

console.table([firstName, lastName, userId, password, accountState])
