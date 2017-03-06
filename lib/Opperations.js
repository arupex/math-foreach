/**
 * Created by daniel.irwin on 3/5/17.
 */

let Mappers = require('./Mappers');
let Util = require('./Util');
class Opperations {

    static derivative1dNth(array, nth, accessor){

        for(let z = 0; z < nth; ++z) {
            let backtrack = array.shift();
            // console.log(backtrack)
            array = array.map(Mappers.derivative1d(backtrack, accessor));
        }
        return array;
    }

    static deviant(array, nth, accessor){

        for(let z = 0; z < nth; ++z) {
            let backtrack = array.shift();
            // console.log(backtrack)
            let lastValue = Util.dGet(backtrack, accessor);

            array = array.map(el => {
                let v =  Math.abs(Util.dGet(el, accessor))-Math.abs(lastValue);
                backtrack = el;
                lastValue = v;
                return  Util.dSet(el, accessor, v);
            });
        }
        return array;
    }

    static abs(array, accessor){
        return array.map(Mappers.abs(accessor));
    }

    static values(array, accessor){
        return array.map(Mappers.values(accessor));
    }

    static objects(array, accessor){
        return array.map(e => Util.dSet({}, accessor, e));
    }


    static normalize(array, accessor, shiftMin){
        if(shiftMin) {
            array = Opperations.positiveShift(array, accessor);
        }
        return Opperations.multiply(array, 1.0 / Opperations.max(array, accessor), accessor);
    }

    static positiveShift(array, accessor){
        return Opperations.add(array, -Opperations.min(array, accessor), accessor);
    }

    static diff(array1, array2, accessor){
        if(array1.length !== array2.length){
            throw new Error("Array Length Mismatch, arrays should be of equal length");
        }

        return array1.map((el, i, arr) => {
            return Util.dSet(el, accessor, Util.dGet(arr[i], accessor) - Util.dGet(array2[i], accessor));
        });
    }

    static onlyAbove(array, targetValue, accessor, dontInclude){
        let r = array.map(Mappers.onlyAbove(targetValue, accessor, dontInclude?'REMOVE':0));

        if(dontInclude){
            return r.filter(Mappers.filterValue('REMOVE', accessor));
        }
        return r;
    }

    static onlyBelow(array, targetValue, accessor, dontInclude){
        let r = array.map(Mappers.onlyBelow(targetValue, accessor, dontInclude?'REMOVE':0));

        if(dontInclude){
            return r.filter(Mappers.filterValue('REMOVE', accessor));
        }
        return r;
    }

    static onlyEqual(array, targetValue, accessor, dontInclude){
        let r = array.map(Mappers.onlyEqual(targetValue, accessor, dontInclude?'REMOVE':0));

        if(dontInclude){
            return r.filter(Mappers.filterValue('REMOVE', accessor));
        }
        return r;
    }

    static add(array, targetValue, accessor){
        return array.map(Mappers.add(targetValue, accessor));
    }

    static multiply(array, targetValue, accessor){
        return array.map(Mappers.multiply(targetValue, accessor));
    }

    static avg(array, accessor){
        return array.length > 0 ? array.reduce(Mappers.sum(accessor)) / array.length : 0;
    }

    static min(array, accessor){
        return array.reduce(Mappers.min(accessor));
    }

    static max(array, accessor){
        return array.reduce(Mappers.max(accessor));
    }

    static median(array, accessor){
        let tmp = array.sort(Mappers.sort(accessor));

        if(array.length % 2 === 0){
            return Util.dGet(tmp[Math.floor(array.length/2)] + tmp[Math.ceil(array.length/2)]) / 2;
        }
        else {
            return tmp[array.length/2];
        }
    }

    static mode(array, accessor){
        let counts = {};
        array.forEach(e => {
            let v = Util.dGet(e, accessor);
            counts[v]?counts[v]++:counts[v]=1
        });

        let mostIndex = undefined;
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



    static sum(array1, array2, accessor){
        if(array1.length !== array2.length){
            throw new Error("Array Length Mismatch, arrays should be of equal length");
        }

        return array1.map((el, i, arr) => {
            return Util.dSet(el, accessor, Util.dGet(arr[i], accessor) + Util.dGet(array2[i], accessor));
        });
    }
}

module.exports = Opperations;