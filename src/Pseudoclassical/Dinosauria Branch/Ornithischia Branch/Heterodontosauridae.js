var Heterodontosauridae = function() {
    Ornithischia.call(this);
    this.mouth = ['beaked', 'canine teeth', 'cheeck teeth']
}

Heterodontosauridae.prototype = Object.create(Ornithischia.prototype);
Heterodontosauridae.prototype.constructor = Heterodontosauridae.prototype;