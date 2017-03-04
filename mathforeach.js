/**
 * Created by daniel.irwin on 3/3/17.
 */

let deepGet = require('deep-value');
let deepSet = require('deep-setter');

class MathForEach {

    constructor(array, accessor){
        this.array = array;
        this.accessor = accessor;
    }

    toValue(){
        return this.array;
    }

    chainDerivative(nth, accessor){
        this.array = MathForEach.derivativeNth(this.array, nth, accessor || this.accessor);
        return this;
    }

    chainNormalize(accessor, shiftMin){
        this.array = MathForEach.normalize(this.array, accessor || this.accessor, shiftMin);
        return this;
    }

    chainPositiveShift(accessor){
        this.array = MathForEach.positiveShift(this.array, accessor || this.accessor);
        return this;
    }

    chainDiff(array2, accessor){
        this.array = MathForEach.diff(this.array, array2, accessor || this.accessor);
        return this;
    }

    chainOnlyAbove(targetValue, accessor, dontInclude){
        this.array = MathForEach.onlyAbove(this.array, targetValue, accessor || this.accessor, dontInclude);
        return this;
    }

    chainOnlyBelow(targetValue, accessor, dontInclude){
        this.array = MathForEach.onlyBelow(this.array, targetValue, accessor || this.accessor, dontInclude);
        return this;
    }

    chainOnlyEqual(targetValue, accessor, dontInclude){
        this.array = MathForEach.onlyEqual(this.array, targetValue, accessor || this.accessor, dontInclude);
        return this;
    }

    chainAdd(targetValue, accessor){
        this.array = MathForEach.add(this.array, targetValue, accessor || this.accessor);
        return this;
    }

    chainMultiply(targetValue, accessor){
        this.array = MathForEach.multiply(this.array, targetValue, accessor || this.accessor);
        return this;
    }

    chainAvg(accessor){
        this.array = MathForEach.onlyAbove(this.array, accessor || this.accessor);
        return this;
    }

    chainMin(accessor){
        this.array = MathForEach.min(this.array, accessor || this.accessor);
        return this;
    }

    chainMax(accessor){
        this.array = MathForEach.max(this.array, accessor || this.accessor);
        return this;
    }

    chainMedian(accessor){
        this.array = MathForEach.median(this.array, accessor || this.accessor);
        return this;
    }

    chainMode(accessor){
        this.array = MathForEach.mode(this.array, accessor || this.accessor);
        return this;
    }


    static dGet(obj, accessor){
        if(accessor){
            return deepGet(obj, accessor);
        }
        return obj;
    }

    static dSet(obj, accessor, value){
        if(accessor){
            return deepSet(obj, accessor, value);
        }
        return value;
    }

    static derivativeNth(array, nth, accessor){

        for(let z = 0; z < nth; ++z) {
            let backtrack = array.shift();
            // console.log(backtrack)
            array = array.map(el => {
                let v =  Math.abs(MathForEach.dGet(el, accessor)) - Math.abs(MathForEach.dGet(backtrack, accessor));
                // console.log(v)
                backtrack = el;
                return  MathForEach.dSet(el, accessor, v);
            });
        }
        return array;
    }

    static values(array, accessor){
        return array.map(e => MathForEach.dGet(e, accessor));
    }

    static objects(array, accessor){
        return array.map(e => MathForEach.dSet({}, accessor, e));
    }


    static normalize(array, accessor, shiftMin){
        if(shiftMin) {
            array = MathForEach.positiveShift(array, accessor);
        }
        return MathForEach.multiply(array, 1.0 / MathForEach.max(array, accessor), accessor);
    }

    static positiveShift(array, accessor){
        return MathForEach.add(array, -MathForEach.min(array, accessor), accessor);
    }

    static diff(array1, array2, accessor){
        if(array1.length !== array2.length){
            throw new Error("Array Length Mismatch, arrays should be of equal length");
        }

        return array1.map((el, i, arr) => {
            return MathForEach.dSet(el, accessor, MathForEach.dGet(arr[i], accessor) - MathForEach.dGet(array2[i], accessor));
        });
    }

    static onlyAbove(array, targetValue, accessor, dontInclude){
        let r = array.map(el => {
            return MathForEach.dSet(el, accessor, MathForEach.dGet(el, accessor) < targetValue ? MathForEach.dGet(el, accessor) : dontInclude?'REMOVE':0);
        });

        if(dontInclude){
            return r.filter(el => MathForEach.dGet(el, accessor) !== 'REMOVE');
        }
        return r;
    }

    static onlyBelow(array, targetValue, accessor, dontInclude){
        let r = array.map(el => {
            return MathForEach.dSet(el, accessor, MathForEach.dGet(el, accessor) < targetValue ? MathForEach.dGet(el, accessor) : dontInclude?'REMOVE':0);
        });

        if(dontInclude){
            return r.filter(el => MathForEach.dGet(el, accessor) !== 'REMOVE');
        }
        return r;
    }

    static onlyEqual(array, targetValue, accessor, dontInclude){
        let r = array.map(el => {
            return MathForEach.dSet(el, accessor, MathForEach.dGet(el, accessor) === targetValue ? MathForEach.dGet(el, accessor) : dontInclude?'REMOVE':0);
        });

        if(dontInclude){
            return r.filter(el => MathForEach.dGet(el, accessor) !== 'REMOVE');
        }
        return r;
    }

    static add(array, targetValue, accessor){
        return array.map(el => {
            return MathForEach.dSet(el, accessor, MathForEach.dGet(el, accessor) + targetValue);
        });
    }

    static multiply(array, targetValue, accessor){
        return array.map(el => {
            return MathForEach.dSet(el, accessor, MathForEach.dGet(el, accessor) * targetValue);
        });
    }

    static avg(array, accessor){
        return array.length > 0 ? array.reduce((a, b) => a ? a + MathForEach.dGet(b, accessor) : MathForEach.dGet(b, accessor)) / array.length : 0;
    }

    static min(array, accessor){
        return array.reduce((a, b) => a?Math.min(a, MathForEach.dGet(b, accessor)):b);
    }

    static max(array, accessor){
        return array.reduce((a, b) => a?Math.max(a, MathForEach.dGet(b, accessor)):b);
    }

    static median(array, accessor){
        let tmp = array.sort((a, b) => {
            return MathForEach.dGet(a, accessor) - MathForEach.dGet(b, accessor);
        });

        if(array.length % 2 === 0){
            return MathForEach.dGet(tmp[Math.floor(array.length/2)] + tmp[Math.ceil(array.length/2)]) / 2;
        }
        else {
            return tmp[array.length/2];
        }
    }

    static mode(array, accessor){
        let counts = {};
        array.forEach(e => {
            let v = MathForEach.dGet(e, accessor);
            counts[v]?counts[v]++:counts[v]=1
        });

        let mostIndex;
        Object.keys(counts).forEach( e => {
            if(typeof mostIndex === 'undefined'){
                mostIndex = e;
            }
            if(counts[mostIndex] <= counts[e]){
                mostIndex = e;
            }
        });
        return mostIndex;
    }


    //Entirely for Utility not mathematical
    static graph(array, accessor){
        if (process.stdout.isTTY) {
            //process.stdout.getWindowSize()
        }
    }



}

module.exports = MathForEach;