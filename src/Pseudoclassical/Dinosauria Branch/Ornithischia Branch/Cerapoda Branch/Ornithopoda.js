var Ornithopoda = function() {
    Cerapoda.call(this);
    this.armor = ['none']
    this.feet = ['bird like'];
    this.mouth = ['beaked'];
}

Ornithopoda.prototype = Object.create(Cerapoda.prototype);
Ornithopoda.prototype.constructor = Ornithopoda.prototype;