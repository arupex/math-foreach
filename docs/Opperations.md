
 #API
 
     positiveShift(array, optionalAccessor)
     normalize(array, optionalAccessor)
     multiply(array, optionalAccessor)
     add(array, optionalAccessor)
     mode(array, optionalAccessor)
     median(array, optionalAccessor)
     avg(array, optionalAccessor)
     min(array, optionalAccessor)
     max(array, optionalAccessor)
     
     derivativeNth(array, nth, optionalAccessor)
     onlyAbove(array, optionalAccessor)
     onlyEqual(array, optionalAccessor)
     onlyBelow(array, optionalAccessor)
     onlyBelow(array, optionalAccessor)
     
**Simple Array Style Calls**

     math.normalize(dataStyle2));   // rerange 0-1
     math.multiply(dataStyle2, 5)); // multiplyiesvalues by 5
     math.add(dataStyle2, 5));      // adds 2 to values
     math.median(dataStyle2));      // determines median
     math.mode(dataStyle2));        // determines mode
     math.avg(dataStyle2));         // determines average
     math.min(dataStyle2));         // determines min
     math.max(dataStyle2));         // determines max
     math.values(dataStyle1, 'value') // returns dataStyle2
     
 **Object Array Style Calls**

    math.normalize(dataStyle2, 'value');   // rerange 0-1
    math.multiply(dataStyle2, 5, 'value'); // multiplyiesvalues by 5
    math.add(dataStyle2, 5, 'value');      // adds 2 to values
    math.median(dataStyle2, 'value');      // determines median
    math.mode(dataStyle2, 'value');        // determines mode
    math.avg(dataStyle2, 'value');         // determines average
    math.min(dataStyle2, 'value');         // determines min
    math.max(dataStyle2, 'value');         // determines max
 