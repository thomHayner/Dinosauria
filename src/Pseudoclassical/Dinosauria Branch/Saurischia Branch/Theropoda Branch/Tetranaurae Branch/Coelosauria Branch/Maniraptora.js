var Maniraptora = function() {
    Coelurosauria.call(this);
    this.arms = ['long'];
    this.hands = ['three fingered'];
    this.body = ['breast bone'];
};

Maniraptora.prototype = Object.create(Coelurosauria.prototype);
Maniraptora.prototype.constructoe = Maniraptora.prototype;