function User(){}

User.prototype.hatch = function(tamagotchi) {
  this.tamagotchi = tamagotchi;
};

User.prototype.nameTamagotchi = function(name) {
    var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  this.tamagotchi.setName(capitalized);
};

User.prototype.feedTamagotchi = function() {
  this.tamagotchi.needs[3].decrease();
  this.tamagotchi.needs[2].increase();
};

User.prototype.playWithTamagotchi = function() {
  this.tamagotchi.needs[0].increase();
  this.tamagotchi.needs[1].increase();
};

User.prototype.putTamagotchiToBed = function() {
  this.tamagotchi.needs[1].decrease();
};

User.prototype.makeTamagotchiPoop = function() {
  this.tamagotchi.needs[2].decrease();
};

module.exports = User;