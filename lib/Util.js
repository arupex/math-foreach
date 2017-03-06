/**
 * Created by daniel.irwin on 3/4/17.
 */

let deepGet = require('deep-value');
let deepSet = require('deep-setter');

class Util {

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

    static stringToArray(str){
        return str.split('').map(e => parseInt(e));
    }


    static array2Map(array, accessor){
        let data = {};
        array.forEach(e => data[Util.dGet(e, accessor)] = e);
        return data;
    }

    static map2Array(map, accessor){
        return Object.keys(map).map(e => Util.dSet(map[e], accessor, isNaN(e)?e:parseInt(e)));
    }

    static mapNearestNeighbor(map, value, granularity, attempts){
        let offset = granularity;
        attempts = attempts || 50;//idk
        while((!map[value+offset] && !map[value-offset]) && attempts--){
            offset+=granularity;
        }

        return map[value+offset] || map[value-offset];
    }


    static arbitraryOperation(array, opperation, accessor){
        if(typeof opperation !== 'function'){
            throw new Error('Opperation must be a function');
        }
        return array.map( e => Util.dSet(e, accessor, opperation(Util.dGet(array, accessor))));
    }

    static clone(obj){
        return JSON.parse(JSON.stringify(obj));//dirty for now
    }


}

module.exports = Util;