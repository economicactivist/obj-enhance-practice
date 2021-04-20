const createInstructor = (firstName, lastName) => ({firstName, lastName})

console.log(createInstructor("dave", "jones"))


let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  favoriteNumber: [favoriteNumber]
}

console.log(instructor.favoriteNumber)


const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

  console.log(instructor2.sayBye())


// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.


const createAnimal = (species, verb, noise) => {
    return {species,
    [verb]() {
        return noise
    }}
}


const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
console.log(d.bark()) //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()) //"BAAAAaaaa"