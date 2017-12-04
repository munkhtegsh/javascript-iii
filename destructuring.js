// ========================
// DESTRUCTURING
// ========================

// Use object destructuring to save the property values 
//from the object carDetails into new variables. 

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}

// CODE HERE
var color = carDetails.color;
var make = carDetails.make;
var model = carDetails.model;
var year = carDetails.year;

// ========================


// In the function below named greeting, it is receiving an object as a 
//parameter. Use object destructuring to save the object properties to new 
//variables. The property names are firstName, lastName, and title. 
//Return the concatenated string.

function greeting(obj) {
  // CODE HERE
  var title = obj.title;
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
}


// ========================


// Write a function called totalPopulation that will take in an object. 
//That object will have 4 properties named utah, california, 
//texas and arizona. The property values will be numbers. 
//Use object destructuring to save the property values to new variables. 
//Sum up the values and return the total number.

// CODE HERE
var obj = {
  utah: 1,
  california: 2,
  texas: 3,
  arizona: 4
};

var totalPopulation = (obj) => {
  return obj.utah + obj.california + obj.texas + obj.arizona;
};


// ========================


// Write a function called ingredients that will take in an object. 
//This object will have 3 properties named carb, fat, and protein. 
//The property values will be strings. Use object destructuring to save 
//the property values to new variables. Push these new variables to an array 
//and return the array. 

// CODE HERE
obj = {
  carb : 'butter',
  fat : 'eggs',
  protein : 'flour'
};

var ingredients = (obj) => {
  var arr = [];
  arr.push(obj.carb, obj.fat, obj.protein);
  return arr;
}

// ========================


// Now we will use object destructuring as the function's parameter 
//instead of destructuring the object inside of the function declaration. 
//See the example below:

// function example( {one, two, three} ) {
//   return one + two + three
// }

// Write a function called largeNumbers that will take a destructured 
//object as it's parameter. The object properties will be named first, 
//second, and third and their values will be numbers. Find the smallest 
//number of the three and return that number.

// CODE HERE
var obj = {
  first : 1,
  second : 2,
  third : 3
};

var largeNumbers = (obj) => {
  var smallest = obj.first;
  for (var key in obj) {
    if (obj[key] < smallest) {
      smallest = obj[key];
    }
  }
  return smallest;
}




// ========================


// Write a function called numberGroups that will take a 
//destructured object as it's parameter. The object properties will be named
// a, b, and c and their values will be arrays of numbers. Find the longest 
//array and return that array. 

// CODE HERE
var obj = {
  a : [1,2],
  b : [4,5,6],
  c : [7,8,9,10]
}
var numberGroups = (obj) => {
  var longest = obj.a;
  for (var key in obj) {
    if (longest.length < obj[key].length) {
      longest = obj[key];
    }
  }

  return longest;

}