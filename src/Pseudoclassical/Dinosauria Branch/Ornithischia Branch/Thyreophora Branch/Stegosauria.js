var Stegosauria = function() {
    Thyreophora.call(this);
    this.tail = ['spined'];
    this.dorsal = ['plates'];
    this.skull = ['small'];
}

Stegosauria.prototype = Object.create(Thyreophora.prototype);
Stegosauria.prototype.constructor = Stegosauria.prototype;