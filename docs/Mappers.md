#Map Functions used internally by Opperations/etc shared for Future use with Streams/Parallel! and other methods

Sum values (reduction)

    static sum(accessor)

Calc Min (reduction)

    static min(accessor)

Calc Max (reduction)

    static max(accessor)

Sorts Data ( a - b ) or ( b - a )

    static sort(accessor, invert)

Multiplies values (a) => a * multiplier

    static multiply(multiplier, accessor)

Adds values (a) => a + adder

    static add(adder, accessor)

Filters out a value ( a !== value )

    static filterValue(value, accessor)

Keeps all values, but sets values *NOT EQUAL* to targetValue to setValue

    static onlyEqual(targetValue, accessor, setValue)

Keeps all values, but sets values *NOT Below* to targetValue to setValue

    static onlyBelow(targetValue, accessor, setValue)

Keeps all values, but sets values *NOT Above* to targetValue to setValue

    static onlyAbove(targetValue, accessor, setValue)

Returns Array of Values [{value : 7}] => [7]

    static values(accessor)

Math.abs but spans array

    static abs(accessor)

Calculates Derivative (requires a backtrack reference to the last element)   (a) => a - backtrack

    static derivative1d(backtrack, accessor)