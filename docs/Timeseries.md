#Timeseries

Constructor

    constructor(array, granularity, timeAccessor, valueAccessor)
    
    
Removes Data non in alignment

    alignData()

Fills Gaps with Data Nearest to the missing point ( no mathematical correction based on time )

    adjustData(window)
    
Fills Gaps with Value

    gapFill(fillValue, valueAccessor)
        
Returns Array Value

    toValue()