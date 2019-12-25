var Thyreophora = function() {
    Ornithischia.call(this);
    this.armor = ['surface body armor'];
};

Thyreophora.prototype = Object.create(Ornithischia.prototype);
Thyreophora.prototype.constructor = Thyreophora.prototype;