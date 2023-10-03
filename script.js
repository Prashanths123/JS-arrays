// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names).
var myFavSuperheroes = [
  "Iron Man",
  "Spider Man",
  "Super Man",
  "Bat Man",
  "Hulk",
];
console.log(myFavSuperheroes)

// Challenge 2: Print (in console) the first superheroes name in your array "myFavSuperheroes".
console.log( myFavSuperheroes[0]);
// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
console.log( myFavSuperheroes.length)
// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".
myFavSuperheroes[myFavSuperheroes.length - 2] = "Prashanth";
console.log( myFavSuperheroes[myFavSuperheroes.length - 2]);
// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
var friendName = "Friend 1";
myFavSuperheroes.unshift(friendName);
console.log(myFavSuperheroes);
// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.
var friendName = "Friend 2";
myFavSuperheroes.push(friendName);
console.log(myFavSuperheroes);
// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
var friendName = "Friend 1";
var index = myFavSuperheroes.indexOf(friendName);
if (index !== -1) {
    var updatedArray = myFavSuperheroes.slice(0, index).concat(myFavSuperheroes.slice(index + 1));
    myFavSuperheroes = updatedArray;
}
console.log(myFavSuperheroes);
// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.
var friendName = "Friend 2";
var index = myFavSuperheroes.indexOf(friendName);
if (index !== -1) {
    var updatedArray = myFavSuperheroes.slice(0, index).concat(myFavSuperheroes.slice(index + 1));
    myFavSuperheroes = updatedArray;
}
console.log(myFavSuperheroes);
// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
var friendName = "Friend 1";
myFavSuperheroes.splice(2, 0, friendName);
console.log(myFavSuperheroes);

// Challenge 10:  Remove the 4th and 5th element in the array "myFavSuperheroes",  and add your friend's name (friend 2) at the 4th position using the splice method.
var removedElements = myFavSuperheroes.splice(3, 2);
var friendName = "Friend 2";
myFavSuperheroes.splice(3, 0, friendName);
console.log(myFavSuperheroes);
// Challenge 11:  Create a nested array "superheroUniverse" and add 2 ararys to it, where first array should contain the name of the Marvel superheroes and second ararys should contain the name of the DC superhereoes.
var superheroUniverse = [
  ["Spider-Man", "Iron Man", "Thor", "Hulk", "Black Widow"],
  ["Superman", "Batman", "Wonder Woman", "The Flash", "Aquaman"]
];
console.log(superheroUniverse);
// Challenge 12: Print one of the Marvel superhero name from the array "superheroUniverse".
var marvelSuperhero = superheroUniverse[0][0];
console.log("A Marvel superhero: " + marvelSuperhero);
var dcSuperhero = superheroUniverse[1][0];
console.log("A DC superhero: " + dcSuperhero);