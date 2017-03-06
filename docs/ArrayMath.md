
  **Chain Calls**
  
      let obj = new MathForEach(myArray, optionalAccessor);
      
      obj
        .derivative1d(1)
        .normalize()
        .median();
        // Note : functions that reduce array return value and not chain object
    
 **Chains**
            
        derivative1d(nth, optionalAccessor)
        normalize(optionalAccessor, shiftMin)
        positiveShift(optionalAccessor)
        diff(array2, optionalAccessor)
        onlyAbove(targetValue, optionalAccessor, dontInclude)
        onlyBelow(targetValue, optionalAccessor, dontInclude)
        onlyEqual(targetValue, optionalAccessor, dontInclude)
        add(targetValue, optionalAccessor)
        multiply(targetValue, optionalAccessor)
        avg(optionalAccessor)
        min(optionalAccessor)
        max(optionalAccessor)
        median(optionalAccessor)
        mode(optionalAccessor)