/**
 * Created by daniel.irwin on 3/4/17.
 */

let TOpperators = require('./TimeOpperators');
class Timeseries {

    constructor(array, granularity, timeAccessor, valueAccessor){
        this.array = array;
        this.granularity = granularity;
        this.timeAccessor = timeAccessor;
        this.valueAccessor = valueAccessor;
    }

    toValue() {
        return this.array;
    }

    alignData(){
        this.array = TOpperators.alignData(this.array, this.granularity, this.timeAccessor);
        return this;
    }

    adjustData(window){
        this.array = TOpperators.adjustData(this.array, this.granularity, this.timeAccessor, window || 1);
        return this;
    }


    gapFill(fillValue, valueAccessor){
        this.array = TOpperators.gapFill(this.array, this.granularity, this.timeAccessor,valueAccessor || this.valueAccessor, fillValue);
        return this;
    }
    //
    // aggregate(granularity, valueAccessor){
    //     this.array = TOpperators.aggregate(this.array, granularity, this.timeAccessor, valueAccessor || this.valueAccessor);
    //     return this;
    // }
    //
    // disaggregate(granularity, valueAccessor, shiftDataToFit, neighborAttempts, fillValue){
    //     this.array = TOpperators.disaggregate(this.array, granularity, this.timeAccessor,valueAccessor|| this.valueAccessor, shiftDataToFit, neighborAttempts, fillValue);
    //     return this;
    // }

}

module.exports = Timeseries;