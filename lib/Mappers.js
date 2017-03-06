/**
 * Created by daniel.irwin on 3/5/17.
 */
let Util = require('./Util');

//Seperate the Mapping Lambdas out for Streaming
class Mappers {

    static sum(accessor){
        // return (a, b) => a===undefined ?  Util.dGet(b, accessor) : a + Util.dGet(b, accessor);
        return (a, b) => a===undefined?Util.dGet(b, accessor): (typeof a ==='object'?Util.dGet(a, accessor):a) + Util.dGet(b, accessor);
    }

    static min(accessor){
        return (a, b) => a===undefined?Util.dGet(b, accessor): Math.min(typeof a ==='object'?Util.dGet(a, accessor):a, Util.dGet(b, accessor));
    }

    static max(accessor){
        return (a, b) => a===undefined?Util.dGet(b, accessor): Math.max(typeof a ==='object'?Util.dGet(a, accessor):a, Util.dGet(b, accessor));
    }

    static sort(accessor, invert){
        return (a, b) => invert?Util.dGet(b, accessor) - Util.dGet(a, accessor):Util.dGet(a, accessor) - Util.dGet(b, accessor);
    }

    static multiply(multiplier, accessor){
        return el => Util.dSet(el, accessor, Util.dGet(el, accessor) * multiplier);
    }

    static add(adder, accessor){
        return el => Util.dSet(el, accessor, Util.dGet(el, accessor) + adder);
    }

    static filterValue(value, accessor){
        return el => Util.dGet(el, accessor) !== value;
    }

    static onlyEqual(targetValue, accessor, setValue){
        return el => Util.dSet(el, accessor, Util.dGet(el, accessor) === targetValue ? Util.dGet(el, accessor) : setValue);
    }

    static onlyBelow(targetValue, accessor, setValue){
        return el => Util.dSet(el, accessor, Util.dGet(el, accessor) < targetValue ? Util.dGet(el, accessor) : setValue);
    }

    static onlyAbove(targetValue, accessor, setValue){
        return el => Util.dSet(el, accessor, Util.dGet(el, accessor) > targetValue ? Util.dGet(el, accessor) : setValue);
    }

    static values(accessor){
        return e => Util.dGet(e, accessor);
    }

    static abs(accessor){
        return e => Util.dSet(e, accessor, Math.abs(Util.dGet(e, accessor)));
    }

    static derivative1d(backtrack, accessor){
        let v = 0;
        let z = backtrack;
        return el => {
            v =  Math.abs(Util.dGet(el, accessor)) - Math.abs(Util.dGet(z, accessor));
            // console.log(v)
            z = Util.clone(el);
            return  Util.dSet(el, accessor, v);
        };
    }

}

module.exports = Mappers;