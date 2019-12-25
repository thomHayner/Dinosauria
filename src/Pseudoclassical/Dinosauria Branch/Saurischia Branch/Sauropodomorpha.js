var Sauropodomorpha = function() {
    Saurischia.call(this);
    this.pedal = ['biped', 'quadruped'];
    this.tail = ['long'];
    this.head = ['small'];
    this.neck = ['long'];
};

Sauropodomorpha.prototype = Object.create(Sauropodomorpha.prototype);
Sauropodomorpha.prototype.constructor = Sauropodomorpha.prototype;