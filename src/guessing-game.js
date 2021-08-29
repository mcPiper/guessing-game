class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        this._guess = Math.ceil((this._max - this._min) / 2) + this._min;
        return this._guess;
    }

    lower() {
        this.setRange(this._min, this._guess);
        this.guess();
    }

    greater() {
        this.setRange(this._guess, this._max);
        this.guess();
    }
}

module.exports = GuessingGame;
