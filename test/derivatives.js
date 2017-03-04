/**
 * Created by daniel.irwin on 3/3/17.
 */

describe('Derivatives', () => {

    var math = require('../mathforeach');

    var data = require('./data/simpleDataSet.json');

    var data2 = require('./data/simpleDataSet2.json');

    function d(){
        return JSON.parse(JSON.stringify(data2));
    }

    it('1st', () => {

        console.log('1st', math.derivativeNth(d(), 1));
        console.log('2st', math.derivativeNth(d(), 2));
        console.log('3st', math.derivativeNth(d(), 3));
        console.log('4st', math.derivativeNth(d(), 4));
        console.log('5st', math.derivativeNth(d(), 5));


        console.log('normalize', math.normalize(d()));
        console.log('mult 5', math.multiply(d(), 5));
        console.log('add 5', math.add(d(), 5));
        console.log('median', math.median(d()));
        console.log('mode', math.mode(d()));
        console.log('average', math.avg(d()));

        console.log('min', math.min(d()));
        console.log('max', math.max(d()));

        console.log('Just values', math.values(data, 'value'));

        console.log('Just values', math.objects(math.values(data, 'value'), 'values'));


        console.log('normalize min positive', math.normalize([ 2, 3, 4, 5, 6, 7], null, true));

        console.log('normalize min negative', math.normalize([-5, 2, 3, 4, 5, 6, 7], null, true));


        console.log('positiveShift', math.positiveShift([-5, 2, 3, 4, 5, 6, 7], null, true));

        console.log('mode', math.mode([-5, 2, 3, 4, 5, 2, 7], null, true));


    });


});