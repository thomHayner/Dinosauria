var Ankylosauria = function() {
    Thyreophora.call(this);
    this.tail = ['clubbed'];
    this.dorsal = ['fused bone plate armor'];
    this.skull = ['ossified'];
};

Ankylosauria.prototype = Object.create(Thyreophora.prototype):
Ankylosauria.prototype.constructor = Ankylosauria.prototype;