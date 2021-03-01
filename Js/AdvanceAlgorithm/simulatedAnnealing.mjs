import { Params } from './Params.mjs'

class SimulatedAnnealing {

    currentCoordinateX = null;
    nextCoordinateX;
    bestCoordinateX = 0;

    findOptimum() {
        let temp = Params.MAX_TEMP;
        while (temp > Params.MIN_TEMP) {
            this.nextCoordinateX = this.getRandomCoordinateX();
            let currentEnergy = this.getEnergy(this.currentCoordinateX);
            let newEnergy = this.getEnergy(this.nextCoordinateX);
            if (this.acceptanceProbability(currentEnergy, newEnergy, temp) > Math.random()) {
                this.currentCoordinateX = this.nextCoordinateX
            }
            if (this.f(this.currentCoordinateX) < this.f(this.bestCoordinateX))
                this.bestCoordinateX = this.currentCoordinateX
            temp *= (1 - Params.COOLING_RATE)
        }
        console.log(`Global Optimum x: ${this.bestCoordinateX} f(x) = ${this.f(this.bestCoordinateX)}`)
    }

    getRandomCoordinateX() {
        return (Math.random() * (Params.MAX_COORDINATE - Params.MIN_COORDINATE)) + Params.MIN_COORDINATE;
    }

    f(x) {
        return (x - 0.3) * (x - 0.3) * (x - 0.3) - 5 * x + x * x - 2;
    }
    getEnergy(x) {
        return this.f(x)
    }

    acceptanceProbability(energy, newEnergy, temp) {
        if (newEnergy < energy) {
            return 1;
        }
        return Math.exp((energy - newEnergy) / temp);
    }

}

export { SimulatedAnnealing }