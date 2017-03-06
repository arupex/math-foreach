/**
 * Created by daniel.irwin on 3/4/17.
 */
/**
 * Created by daniel.irwin on 3/5/17.
 */

describe('TimeSeries', () => {

    var TimeSeries = require('../mathforeach').Timeseries;

    let expect = require('assert').deepEqual;

    it('gapFill', () => {

        expect(new TimeSeries([
            {ts: 0, v: -5},
            {ts: 10, v: 2},
            {ts: 13, v: 3},
            {ts: 16, v: 4},
            {ts: 20, v: 5},
            {ts: 22, v: 2},
            {ts: 26, v: 7}
        ], 5, 'ts', 'v')
            .gapFill('FILLED').toValue(), [
                {
                    "ts": 0,
                    "v": -5
                },
                {
                    "ts": 5,
                    "v": "FILLED"
                },
                {
                    "ts": 10,
                    "v": 2
                },
                {
                    "ts": 15,
                    "v": "FILLED"
                },
                {
                    "ts": 20,
                    "v": 5
                },
                {
                    "ts": 25,
                    "v": "FILLED"
                }
            ]);
        // .normalize()
        // .min());


    });


    it('alignData', () => {

        expect(new TimeSeries([
                {ts: 0, v: -5},
                {ts: 10, v: 2},
                {ts: 13, v: 3},
                {ts: 16, v: 4},
                {ts: 20, v: 5},
                {ts: 22, v: 2},
                {ts: 26, v: 7}
            ], 5, 'ts', 'v')
                .alignData().toValue(), [
                {
                    "ts": 0,
                    "v": -5
                },
                {
                    "ts": 10,
                    "v": 2
                },
                {
                    "ts": 20,
                    "v": 5
                }
            ]);
        // .normalize()
        // .min());


    });


    it('adjustData', () => {

        expect(new TimeSeries([
                {ts: 0, v: -5},
                {ts: 10, v: 2},
                {ts: 13, v: 3},
                {ts: 16, v: 4},
                {ts: 20, v: 5},
                {ts: 22, v: 2},
                {ts: 26, v: 7}
            ], 5, 'ts', 'v')
                .adjustData().toValue(), [
                {
                    "ts": 0,
                    "v": 2
                },
                {
                    "ts": 5,
                    "v": 2
                },
                {
                    "ts": 10,
                    "v": 3
                },
                {
                    "ts": 15,
                    "v": 4
                },
                {
                    "ts": 20,
                    "v": 2
                },
                {
                    "ts": 25,
                    "v": 7
                }
            ]);
        // .normalize()
        // .min());


    });

});