#Util

deep get obj => { value : 7}, accessor => 'value' returns 7

    static dGet(obj, accessor)

deep set obj => { }, accessor => 'test.value', value => 7 returns { test : { value : 7 } }

    static dSet(obj, accessor, value)

Turns a string of integers into array of integers ie '12345' => [1, 2, 3, 4, 5]

    static stringToArray(str)

Turns an Array into a Map

    static array2Map(array, accessor)

Turns a Map into an Array

    static map2Array(map, accessor)

Finds the nearest neighbor in a map of Key<Integer>, Value<Object>

    static mapNearestNeighbor(map, value, granularity, attempts)

Run an arbitrary operation(function) on array and return(handles object value access for you)

    static arbitraryOperation(array, opperation, accessor)

Dirty Clone **Does not handle Cyclic Objects!!!**, and slow on big objects

    static clone(obj)
