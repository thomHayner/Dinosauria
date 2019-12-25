var Coelurosauria = function() {
    Tetranaurae.call(this);
    this.til = ['hollow', 'stiffened tip'];
    this.femur = 1;
    this.tibia = this.femur + 1;
    this.sacrum = ['extended'];
    this.vorax = 'omnivore';
};

Coelurosauria.prototype = Object.create(Tetranaurae.prototype);
Coelurosauria.prototype.constructor = Coelurosauria.prototype;