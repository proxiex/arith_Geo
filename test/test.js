const assert = require('chai').assert;
const app = require('../src/arithgeo.js');

//Geometric 
//Arithmetic 
// -1
//0

describe('arithGeo', function(){
    
    //handleling valid inputs
    describe('Handle valid input', function(){

        it('should  return 0 for []', function(){
            assert.equal(app.arithGeo([]), 0);
        });
        
        it('should  return Arithmetic for [1,2,3,4,5]', function(){
            assert.equal(app.arithGeo([1,2,3,4,5]), 'Arithmetic');
        });

        it('should  return Geometric for [1,3,9,27]', function(){
            assert.equal(app.arithGeo([1,3,9,27]), 'Geometric');
        });

        it('should  return -1 for [1,3,3,54,9]', function(){
            assert.equal(app.arithGeo([1,3,3,54,9]), -1);
        });
    })

    describe('Handle invlaid input', function(){
        it('should return undefined for "abc" ', function(){
            assert.equal(app.arithGeo('abc'), 'Undefind');
        });

    })
})