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
