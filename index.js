// function bullet(speed , damage) {
//   return{
//     speed,
//     damage,
//   }
// };
function bullet(speed, damage) {
  this.speed = speed;
  this.damage = damage;
}
// class bullet{
//   constructor(speed, damage) {
//   this.speed=speed;
//   this.damage=damage;
// }
// };
function ship(hp, speed) {
  this.hp = hp;
  this.speed = speed;
  this.fireBullet = function () {
    return new bullet(1, 1);
  };
}

// A Ship has two attributes:
// HP (Health Points)
// Speed (how fast it moves)
// A Ship has one method:
// fireBullet() returns a Bullet object with 1 speed and 1 damage

function alien(hp, coordinates, speed) {
  this.hp = hp;
  this.coordinates = { x: coordinates.x, y: coordinates.y };
  this.speed = { x: speed.x, y: speed.y };
  this.move = function () {
    this.coordinates.x += this.speed.x;
    this.coordinates.y += this.speed.y;
  };
}

const ali = new alien(10, { x: 5, y: 14 }, { x: 7, y: 6 });
console.log(ali.move());

//method move will change x and y cordinates by aliens speed
// on hit(bullet) method takes a bullet as a para and decrease the aliens hp by the bullet damage

function barrier(maxHP, currentHP, size, coordinates) {
  this.maxHP = maxHP;
  this.currentHP = currentHP;
  this.size = size;
  this.coordinates = { x: coordinates.x, y: coordinates.y };
  this.repair = function () {
    if (this.currentHP === this.maxHP) {
      this.size++;
    }
  };
  this.break = function () {
    if (this.currentHP === 0) {
      this.size--;
    }
  };
}

const newBar = new barrier(1, 1, 1, { x: 1, y: 1 });

console.log(newBar);