/**
 * Created by daniel.irwin on 3/3/17.
 */

describe('Opperations', () => {

    let Opperations = require('../mathforeach').Opperations;

    let data = require('./data/simpleDataSet.json');

    let data2 = require('./data/simpleDataSet2.json');

    let expect = require('assert').deepEqual;

    function d() {
        return JSON.parse(JSON.stringify(data2));
    }

    it('1st Derivative', () => {
        expect(Opperations.derivative1dNth(d(), 1), [1, 1, 1, 1, 1, 1, 6, 12, 24, -24, -18, -3, -2, 11, -12]);
    });

    it('2nd Derivative', () => {
        expect(Opperations.derivative1dNth(d(), 2), [0, 0, 0, 0, 0, 5, 6, 12, 0, -6, -15, -1, 9, 1]);
    });
    it('3rd Derivative', () => {
        expect(Opperations.derivative1dNth(d(), 3), [0, 0, 0, 0, 5, 1, 6, -12, 6, 9, -14, 8, -8]);
    });
    it('5th Derivative', () => {
        expect(Opperations.derivative1dNth(d(), 4), [0, 0, 0, 5, -4, 5, 6, -6, 3, 5, -6, 0]);
    });
    it('5th Derivative', () => {
        expect(Opperations.derivative1dNth(d(), 5), [0, 0, 5, -1, 1, 1, 0, -3, 2, 1, -6]);
    });


    it('normalize', () => {
        expect(Opperations.normalize(d()), [0, 0.020833333333333332, 0.041666666666666664, 0.0625, 0.08333333333333333, 0.10416666666666666, 0.125, 0.25, 0.5, 1, 0.5, 0.125, 0.0625, 0.020833333333333332, 0.25, 0]);
    });
    it('mult 5', () => {
        expect(Opperations.multiply(d(), 5), [0, 5, 10, 15, 20, 25, 30, 60, 120, 240, 120, 30, 15, 5, 60, 0]);
    });
    it('add 5', () => {
        expect(Opperations.add(d(), 5), [5, 6, 7, 8, 9, 10, 11, 17, 29, 53, 29, 11, 8, 6, 17, 5]);
    });
    it('median', () => {
        expect(Opperations.median(d()), 5);
    });
    it('mode', () => {
        expect(Opperations.mode(d()), 24);
    });
    it('average', () => {
        expect(Opperations.avg(d()), 9.4375);
    });

    it('min', () => {
        expect(Opperations.min(d()), 0);
    });


    it('max', () => {
        expect(Opperations.max(d()), 48);
    });

    it('get values', () => {
        expect(Opperations.values(data, 'value'), [0, 1, 2, 3, 4, 5, 6, 12, 24, 48, 24, 6, 3, 1, 12, 0]);
    });

    it('values of object', () => {
        expect(Opperations.objects(Opperations.values(data, 'value'), 'values'),
            [{values: 0},
                {values: 1},
                {values: 2},
                {values: 3},
                {values: 4},
                {values: 5},
                {values: 6},
                {"values": 12},
                {"values": 24},
                {"values": 48},
                {"values": 24},
                {"values": 6},
                {"values": 3},
                {"values": 1},
                {"values": 12},
                {"values": 0},
            ]);
    });


    it('normalize min positive', () => {
        expect(Opperations.normalize([2, 3, 4, 5, 6, 7], null, true), [0, 0.2, 0.4, 0.6000000000000001, 0.8, 1]);
    });

    it('normalize min negative', () => {
        expect(Opperations.normalize([-5, 2, 3, 4, 5, 6, 7], null, true), [0, 0.5833333333333333, 0.6666666666666666, 0.75, 0.8333333333333333, 0.9166666666666666, 1]);
    });

    it('normalize min negative 2', () => {
        expect(Opperations.normalize([-5, 2, 3, 4, 5, 6, 7], null, false), [-0.7142857142857142, 0.2857142857142857, 0.42857142857142855, 0.5714285714285714, 0.7142857142857142, 0.8571428571428571,1]);
    });


    it('postitive shift', () => {
        expect(Opperations.positiveShift([-5, 2, 3, 4, 5, 6, 7], null, true), [0, 7, 8, 9, 10, 11, 12]);
    });

    it('mode', () => {
        expect(Opperations.mode([-5, 2, 3, 4, 5, 2, 7], null, true), 2);
    });


    it('min ts', () => {
        expect(Opperations.min([
            { ts: 0},
            { ts: 10},
            { ts: 13},
            { ts: 16},
            { ts: 20},
            { ts: 22},
            { ts: 26} ], 'ts'), 0);
    });

    it('min nums', () => {
        expect(Opperations.min([ 0, 10, 13, 16, 20, 22, 26 ]), 0);
    });



});