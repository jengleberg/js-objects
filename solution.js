//Literal Syntax

var monkeyOne = {
	name: "Barney",
	species: "Bonobo",
	favoriteFoods: ["bananas, chicken"],
	eatSomething: function(thing) {
		console.log(this.name + " ate " + thing);
	},
	introduce: function() {
		console.log("This is " + this.name + " and he is a " + this.species + " and he likes " + this.favoriteFoods.join(" and "));
	}
};

monkeyOne.eatSomething("apple");
monkeyOne.introduce();

function Monkey(name, species, favoriteFoods) {
	this.name = name;
	this.species = species;
	this.favoriteFoods = favoriteFoods;
	this.eatSomething = function(thing) {
		console.log(this.name + " ate " + thing);
	};
	this.introduce = function() {
		console.log("This is " + this.name + " and he is a " + this.species + " and he likes " + this.favoriteFoods.join(" and "));
	};
}

var monkeyTwo = new Monkey("Steve", "Gorilla", ["bananas", "tacos"]);
monkeyTwo.eatSomething("shoes");
monkeyTwo.introduce();
