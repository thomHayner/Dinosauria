var Ceratopsia = function() {
    Marginocephalia.call(this);
    this.mouth = ['beaked'];
    this.skull = ['smooth', 'horned']
    this.pedal = ['biped', 'quadruped']
};

Ceratopsia.prototype = Object.create(Marginocephalia.prototype);
Ceratopsia.prototype.constructor = Ceratopsia.prototype;