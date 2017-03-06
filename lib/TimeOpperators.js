/**
 * Created by daniel.irwin on 3/5/17.
 */

let Util = require('./Util');
let Opperations = require('./Opperations');
class TimeOpperators {

    static adjustData(array, granularity, timeAccessor, window){
        let start = Opperations.min(array, timeAccessor);
        let end = Opperations.max(array, timeAccessor);

        let timeData = Util.array2Map(array, timeAccessor);

        var data = {};
        for(;start<end; start+=granularity){
            data[start] = Util.dSet(Util.clone(Util.mapNearestNeighbor(timeData, start, window)), timeAccessor, start);
        }
        return Util.map2Array(data, timeAccessor);
    }

    static alignData(array, granularity, timeAccessor){
        let start = Opperations.min(array, timeAccessor);

        let end = Opperations.max(array, timeAccessor);

        let timeData = Util.array2Map(array, timeAccessor);

        var data = {};
        for(;start<end; start+=granularity){
            if(timeData[start]) {
                data[start] = timeData[start];
            }
        }
        return Util.map2Array(data, timeAccessor);
    }


    static gapFill(array, granularity, timeAccessor, valueAccessor, fillValue){
        let start = Opperations.min(array, timeAccessor);

        let end = Opperations.max(array, timeAccessor);

        let timeData = Util.array2Map(array, timeAccessor);

        var data = {};
        function fill(ts){
            let d = {};
            Util.dSet(d, timeAccessor, ts);
            Util.dSet(d, valueAccessor, fillValue);
            return d;
        }
        for(;start<end; start+=granularity){
            data[start] = timeData[start] || fill(start);
        }
        return Util.map2Array(data, timeAccessor);
    }

    // static aggregate(array, granularity, timeAccessor, valueAccessor){
    //     let start = Opperations.min(array, timeAccessor);
    //     let end = Opperations.max(array, timeAccessor);
    //
    //     var data = {};
    //     for(;start<end; start+=granularity){
    //         data[start] = shiftDataToFit?Util.mapNearestNeighbor(timeData, start, granularity, neighborAttempts):Util.dSet({},valueAccessor, fillValue);
    //     }
    //
    //     return MathForEach.map2Array(data, timeAccessor);
    // }
    //
    // static disaggregate(array, granularity, timeAccessor, valueAccessor, shiftDataToFit, neighborAttempts, fillValue){
    //     let start = Opperations.min(array, timeAccessor);
    //     let end = Opperations.max(array, timeAccessor);
    //
    //     let timeData = Util.array2Map(array, timeAccessor);
    //
    //     var data = {};
    //     for(;start<end; start+=granularity){
    //         data[start] = shiftDataToFit?Util.mapNearestNeighbor(timeData, start, granularity, neighborAttempts):Util.dSet({},valueAccessor, fillValue);
    //     }
    //     return Util.map2Array(data, timeAccessor);
    // }
}

module.exports = TimeOpperators;