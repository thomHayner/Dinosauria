var Theropoda = function() {
    Saurischia.call(this);
    this.pedal = ['biped'];
    this.feet = ['beast foot'];
    this.vorax = 'Carnivore';
}

Theropoda.prototype = Object.create(Saurischia.prototype);
Theropoda.prototype.constructor = Theropoda.prototype;