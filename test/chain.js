/**
 * Created by daniel.irwin on 3/5/17.
 */

describe('Chain', () => {

    var ArrayMath = require('../mathforeach').ArrayMath;

    let expect = require('assert').deepEqual;

    it('1st derivative array of numbers', () => {

        expect(new ArrayMath([-5, 2, 3, 4, 5, 2, 7])
            .derivative1d(1).toValue(), [2-5, 3-2,4-3,5-4,2-5,7-2]);
        // .normalize()
        // .min());


    });

    it('1st derivative array of objects of numbers', () => {

        expect(new ArrayMath([
            {value: -5},
            {value: 2},
            {value: 3},
            {value: 4},
            {value: 5},
            {value: 2},
            {value: 7}
        ], 'value')
            .derivative1d(1).toValue(), [
            {value: 2-5},
            {value: 3-2},
            {value:  4-3},
            {value:  5-4},
            {value:  2-5},
            {value: 7-2}
        ]);
        // .normalize()
        // .min();

    });

    it('chain to min of array of numbers', () => {

        expect(new ArrayMath([-5, 2, 3, 4, 5, 2, 7])
            .derivative1d(1).normalize().min(), -0.6000000000000001);
            // .normalize()
            // .min());


    });

    it('chain to min of array of objects of numbers', () => {

        expect(new ArrayMath([
            {value: -5},
            {value: 2},
            {value: 3},
            {value: 4},
            {value: 5},
            {value: 2},
            {value: 7}
        ], 'value')
            .derivative1d(1).normalize().min(),-0.6000000000000001);
            // .normalize()
            // .min();

    });


});