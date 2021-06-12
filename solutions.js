//Part1
class Cat{
  constructor(spots){
    this.spots = spots;
  }
}

const spot = new Cat(4);
const charles = new Cat(6);
console.log(spot);
console.log(charles);
//Part2
function alterCat(cat){
    cat.spots += 1;
}
alterCat(charles);
console.log(charles);

let catArray = [];
for(let i = 0; i < 6; i++){
  catArray[i]=new Cat(i);
}
console.log(catArray);


const catPerson = {
  cats : catArray
}
console.log(catPerson);
//Part3
class Pirate {
  constructor(legs, eyes, hooks){
    this.legs = legs;
    this.eyes = eyes;
    this.hooks = hooks;
  }
  addHook(){
    this.hooks += 1;
  }
  addEyePatch(){
    this.eyes -= 1
  }
  walkThePlank(){
    this.legs -=1;
  }
}

const pirate1 = new Pirate(2,0,1);
const pirate2 = new Pirate(1,1,1);
const pirate3 = new Pirate(1,2,1);
const pirate4 = new Pirate(1,1,2);
const pirate5 = new Pirate(2,1,1);
const pirate6 = new Pirate(2,2,1);

blackPearl = [pirate1,pirate2,pirate3];
jollyRoger = [pirate4,pirate5,pirate6];

function logArray(arr){
  console.log(arr)
}
