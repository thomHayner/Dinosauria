var Cerapoda = function() {
    Ornithischia.call(this);
}

Cerapoda.prototype = Object.create(Ornithischia.prototype);
Cerapoda.prototype.constructor = Cerapoda.prototype;