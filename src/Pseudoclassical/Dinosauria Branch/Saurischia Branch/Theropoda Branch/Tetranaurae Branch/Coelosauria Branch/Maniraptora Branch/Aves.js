var Aves = function() {
    Maniraptora.call(this);
    this.extinct = false;
    this.canFly = true;
};

Aves.prototype = Object.create(Maniraptora.prototype);
Aves.prototype.constructor = Aves.prototype;