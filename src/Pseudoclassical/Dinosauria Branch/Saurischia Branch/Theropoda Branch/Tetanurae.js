var Tetanurae = function() {
    Theropoda.call(this);
    this.tail = ['stiffened'];
    this.corpus = ['rib cage'];
};

Tetanurae.prototype = Object.create(Theropoda.prototype);
Tetanurae.prototype.constructor = Tetanurae.prototype;