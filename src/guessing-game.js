class GuessingGame {
    constructor() {}
    min = 0;
    max = 0;
    average = 0;

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.average = Math.round((this.min + this.max) / 2);
        return this.average;
    }

    lower() {
        return this.max = this.average;
    }

    greater() {
        return this.min = this.average;
    }
}

module.exports = GuessingGame;
