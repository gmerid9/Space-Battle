// ship class
class Ship {
  constructor(name, hull, firePower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firePower = firePower;
    this.accuracy = accuracy;
  }
}

// main Ship class
class MainShip extends Ship {
  constructor(name, hull, firePower, accuracy) {
    super(name, hull, firePower, accuracy);

    this.name = "USS Assembly";
    this.hull = 20;
    this.firePower = 5;
    this.accuracy = 0.7;
    this.turn = 1;
  }
  attackAlien(target) {
    let randomNum = Math.random();
    if (randomNum <= this.accuracy) {
      target.hull -= this.firePower;
      console.log(`Attacked ${target.name}`);
      // console.log(target.hull);
    } else {
      console.log("USS Assembly missed!"); // if it doesn't hit, do something here
      this.turn = 0;
      target.turn = 1;
    }
  }
}

//  AlienShip  Class
class AlienShip extends Ship {
  constructor(name, hull, firePower, accuracy) {
    super(name, hull, firePower, accuracy);

    this.name = name;
    this.hull = Math.floor(Math.random() * 2) + 3; // between 3 to 6
    this.firePower = Math.floor(Math.random() * 3 + 2); // between 2 to 6
    this.accuracy = (Math.random() * 0.2 + 0.6).toFixed(1); // between .6 to .8
    this.turn = 0;
  }

  attackMainShip(target) {
    let randomNum = Math.random();
    if (randomNum <= this.accuracy) {
      target.hull -= this.firePower;
      console.log(`Attacked ${target.name} for ${this.firepower} damage!`);
      // console.log(target.hull);
    } else {
      console.log("Alien missed!");
      this.turn = 0;
      target.turn = 1;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create 1 mainship and 6 Alien ships
const USSAssembly = new MainShip();
const alienShip1 = new AlienShip("Alien Ship 1");
const alienShip2 = new AlienShip("Alien Ship 2");
const alienShip3 = new AlienShip("Alien Ship 3");
const alienShip4 = new AlienShip("Alien Ship 4");
const alienShip5 = new AlienShip("Alien Ship 5");
const alienShip6 = new AlienShip("Alien Ship 6");

console.log(USSAssembly);

const allAlien = [
  alienShip1,
  alienShip2,
  alienShip3,
  alienShip4,
  alienShip5,
  alienShip6,
]; //store all alien ships in an array
// console.log(allAlien)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   for (i = 0; i=this.hull.MainShip > 0; i++) {
//      attackMainShip(USSAssembly)
//  }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Button to attack the Aliens
const attackButton = document.getElementById("attack");
attackButton.addEventListener("click", () => {
  // check if any enemy is left (if statement -- not a loop)
  // if so, attack the first one in the array
  // else, end the game with disabling button and popping up YOU WIN! alert.

  if (allAlien.length === 1) {
    // if there are no elements in the array, USS WIN and stop the game
    console.log("USS WIN");
    return (attackButton.disabled = true);
  }

  if (allAlien[0].hull < 1) {
    // if the first element in the array hull < 0 , remove it from the array
    allAlien.shift();
  }
  if (USSAssembly.hull < 1) {
    // if USS hull is less than 0, Alien Win and Stop the game
    console.log("ALIEN WIN");
    return (attackButton.disabled = true);
  }

  if (USSAssembly.turn === 1) {
    // use if statement to play alienAttack or ussAssemblyAttack turn by turn
    USSAssembly.attackAlien(allAlien[0]);
  } else allAlien[0].attackMainShip(USSAssembly);
});
