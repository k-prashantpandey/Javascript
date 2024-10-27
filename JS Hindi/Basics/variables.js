const accountId = 123456;
let accountEmail = "hello@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // Not correct but possible
let accountState;  //Undefined

// accountId = 2 // Not allowed
accountemail = "hc@hc.com" // allowed
accountPassword = 212121 // allowed
accountCity = "Bangaluru" // allowed

console.log(accountId);

/* Prefer not to use var
Because ofissue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
