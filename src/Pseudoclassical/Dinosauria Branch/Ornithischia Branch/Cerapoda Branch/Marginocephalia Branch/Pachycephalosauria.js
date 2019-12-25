var Pachycephalosauria = function() {
    Marginocephalia.call(this);
    this.skull = ['ossified'];
    this.pedal = ['biped'];
}

Pachycephalosauria.prototype = Object.create(Marginocephalia.prototype);
Pachycephalosauria.prototype.constructor = Pachycephalosauria.prototype;