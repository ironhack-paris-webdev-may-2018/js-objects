// User
var theUser = [
  "Hugh Jackman",
  "October 12, 1968",
  "555 Australia",
  "hugh@wolverine.com",
  "married"
];

console.log(theUser[0]);
console.log(theUser[4]);


var theUser = {
  fullName: "Hugh Jackman",
  birthdate: "October 12, 1968",
  address: "555 Australia",
  email: "hugh@wolverine.com",
  "marital status": "married"
};

console.log(theUser.fullName);
console.log(theUser.email);

console.log(theUser["marital status"])


console.log(theUser.height);
console.log("height" in theUser);
console.log("birthdate" in theUser);


// Create new keys
theUser.nationality = "Australian";

// Update existing keys
theUser.address = "555 X Street, Sydney, Australia";

// Remove from an object
delete theUser.email;

console.log(theUser);

// Gives you an array of the KEYS as strings
console.log( Object.keys(theUser) );

// Gives you an array of the VALUES
console.log( Object.values(theUser) );

var hughValues = Object.values(theUser);

// Useful for looping over the contents of an object
hughValues.forEach(function (oneItem) {
  console.log("- " + oneItem);
});
