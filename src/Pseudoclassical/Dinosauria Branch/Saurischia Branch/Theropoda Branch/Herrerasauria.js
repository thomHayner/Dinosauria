var Herrerasauria = function() {
    Theropoda.call(this);
    this.sacralVertebrate = 2;
};

Herrerasauria.prototype = Object.creata(Theropoda.prototype);
Herrerasauria.prototype.constructor = Herrerasauria.prototype;