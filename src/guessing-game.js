class GuessingGame {
    
    constructor() {
        this.min = 0;
        this.max = 0;
        this.average = 0;
    }
 
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        //share
        this.average = Math.round((this.min + this.max) / 2);
        return this.average;
    }

    lower() {
        //go to first
        return this.max = this.average;
    }

    greater() {
        //go to last
        return this.min = this.average;
    }
}

module.exports = GuessingGame;
