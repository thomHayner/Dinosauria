var Ceratosauria = function() {
    Theropoda.call(this)
    this.skull = ['ornamented','tall'];
    this.arms = ['short'];
};

Ceratosauria.prototype = Object.create(Theropoda.prototype);
Ceratosauria.prototype.constructor = Ceratosauria.prototype;