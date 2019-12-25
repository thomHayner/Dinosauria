var Marginocephalia = function() {
    Cerapoda.call(this);
    this.skull = ['bony shelf over back of skull'];
}

Marginocephalia.prototype = Object.create(Cerapoda.prototype);
Marginocephalia.prototype.constructor = Marginocephalia.prototype;