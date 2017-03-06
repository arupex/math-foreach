# math-foreach
Simple Array Math Library


[![npm version](https://badge.fury.io/js/math-foreach.svg)](https://badge.fury.io/js/math-foreach)
[![dependencies](https://david-dm.org/arupex/math-foreach.svg)](http://github.com/arupex/math-foreach)
![Build Status](https://api.travis-ci.org/arupex/math-foreach.svg?branch=master) 
![lifetimeDownloadCount](https://img.shields.io/npm/dt/math-foreach.svg?maxAge=2592000)
<a href='https://pledgie.com/campaigns/31873'><img alt='Pledge To Arupex!' src='https://pledgie.com/campaigns/31873.png?skin_name=chrome' border='0' ></a>
    

A word of **Caution**, at Arupex we take **AGILE** seriously, while we try our best to semver, that also means 2 things happen
 - releases with partial code ( if its not tested its not prime time, the api may be unstable, if it does change we will do a major version bump )
 - lots of Major version bumps ( we dont want you broken, because of us )
    
##Install

    npm install math-foreach --save

---    

##Usage

    var MFE = require('math-foreach');
    chainObj = new MFE(array, optionalAccessorStr);

---
    
##Docs
   ( highly recommend reading unit tests in test folder )

---

####Ready
 - [ArrayMath Class](./docs/ArrayMath.md)
 - [Mappers](./docs/Mappers.md)
 - [Opperations](./docs/Opperations.md)
 - [Util](./docs/Util.md)
 
---
 
####In Progress ( Use with Some Caution **Equivalent to Nightly** )
 - [TimeOpperations](./docs/TimeOpperators.md)
 - [Timeseries](./docs/Timeseries.md)

---

####TBC (to be coded, future release)
 - [Formula]()
 - [StreamMath]()
 - [Parallel]()
   
    
**Data Styles** both work thanks to ( deep-setter deep-value modules )

    var dataStyle1 = [{"value": 0},{"value": 1},{"value": 2}]
                     
    var dataStyle2 = [0, 1, 2]
