class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        
    }

    guess() {
        this.middle = Math.ceil((this.max + this.min)/2)
        return this.middle;
    }

    lower() {
        this.max = this.middle;
        return Math.ceil((this.min + this.middle)/2) - 1;
    }

    greater() {
        this.min = this.middle;
        return Math.ceil((this.max + this.middle)/2) + 1;

    }
}

module.exports = GuessingGame;
