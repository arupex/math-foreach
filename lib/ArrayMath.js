/**
 * Created by daniel.irwin on 3/4/17.
 */

let Opperations = require('./Opperations');

class ArrayMath {
    constructor(array, accessor){
        this.array = array;
        this.accessor = accessor;
    }

    toValue(){
        return this.array;
    }

    valueOf(){
        return this.array;
    }

    deviant(nth, accessor){
        this.array = Opperations.deviant(this.array, nth, accessor || this.accessor);
        return this;
    }


    derivative1d(nth, accessor){
        this.array = Opperations.derivative1dNth(this.array, nth, accessor || this.accessor);
        return this;
    }

    normalize(accessor, shiftMin){
        this.array = Opperations.normalize(this.array, accessor || this.accessor, shiftMin);
        return this;
    }

    positiveShift(accessor){
        this.array = Opperations.positiveShift(this.array, accessor || this.accessor);
        return this;
    }

    diff(array2, accessor){
        this.array = Opperations.diff(this.array, array2, accessor || this.accessor);
        return this;
    }

    onlyAbove(targetValue, accessor, dontInclude){
        this.array = Opperations.onlyAbove(this.array, targetValue, accessor || this.accessor, dontInclude);
        return this;
    }

    onlyBelow(targetValue, accessor, dontInclude){
        this.array = Opperations.onlyBelow(this.array, targetValue, accessor || this.accessor, dontInclude);
        return this;
    }

    onlyEqual(targetValue, accessor, dontInclude){
        this.array = Opperations.onlyEqual(this.array, targetValue, accessor || this.accessor, dontInclude);
        return this;
    }

    add(targetValue, accessor){
        this.array = Opperations.add(this.array, targetValue, accessor || this.accessor);
        return this;
    }

    multiply(targetValue, accessor){
        this.array = Opperations.multiply(this.array, targetValue, accessor || this.accessor);
        return this;
    }

    abs(accessor){
        this.array = Opperations.abs(this.array, accessor || this.accessor);
        return this;
    }

    /** Return Values **/
    avg(accessor){
        return Opperations.onlyAbove(this.array, accessor || this.accessor);
    }

    min(accessor){
        return Opperations.min(this.array, accessor || this.accessor);
    }

    max(accessor){
        return Opperations.max(this.array, accessor || this.accessor);
    }

    median(accessor){
        return Opperations.median(this.array, accessor || this.accessor);
    }

    mode(accessor){
        return Opperations.mode(this.array, accessor || this.accessor);
    }


}

module.exports = ArrayMath;