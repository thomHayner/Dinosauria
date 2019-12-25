var Ornithischia = function() {
    Dinosauria.call(this);
    this.hipped = 'bird';
};

Ornithischia.prototype = Object.create(Dinosauria.prototype);
Ornithischia.prototype.constructor = Ornithischia.prototype