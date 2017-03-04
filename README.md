# math-foreach
Simple Array Math Library


[![npm version](https://badge.fury.io/js/math-foreach.svg)](https://badge.fury.io/js/math-foreach)
[![dependencies](https://david-dm.org/arupex/math-foreach.svg)](http://github.com/arupex/math-foreach)
![Build Status](https://api.travis-ci.org/arupex/math-foreach.svg?branch=master) 
![lifetimeDownloadCount](https://img.shields.io/npm/dt/math-foreach.svg?maxAge=2592000)
<a href='https://pledgie.com/campaigns/31873'><img alt='Pledge To Arupex!' src='https://pledgie.com/campaigns/31873.png?skin_name=chrome' border='0' ></a>

    Methods are all static, except chain methods, which can be accessed using constructor of constructor(array, optionalAccessor)
    
    
#Install

    npm install math-foreach --save
    
#Usage

    var MFE = require('math-foreach');
    chainObj = new MFE(array, optionalAccessorStr);
    
**Data Styles**

    var dataStyle1 = [
                       {
                         "value": 0
                       },
                       {
                         "value": 1
                       },
                       {
                         "value": 2
                       }
                     ]
                     
     var dataStyle2 = [0, 1, 2]

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
 
  **Chain Calls**
  
      let obj = new MathForEach(myArray, optionalAccessor);
      
      obj
        .chainDerivative(1)
        .chainNormalize()
        .chainMedian()
        .toValue();
    
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
     
 **Chains**
            
        chainDerivative(nth, optionalAccessor)
        chainNormalize(optionalAccessor, shiftMin)
        chainPositiveShift(optionalAccessor)
        chainDiff(array2, optionalAccessor)
        chainOnlyAbove(targetValue, optionalAccessor, dontInclude)
        chainOnlyBelow(targetValue, optionalAccessor, dontInclude)
        chainOnlyEqual(targetValue, optionalAccessor, dontInclude)
        chainAdd(targetValue, optionalAccessor)
        chainMultiply(targetValue, optionalAccessor)
        chainAvg(optionalAccessor)
        chainMin(optionalAccessor)
        chainMax(optionalAccessor)
        chainMedian(optionalAccessor)
        chainMode(optionalAccessor)