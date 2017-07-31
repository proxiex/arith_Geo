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

        it('should  return Geometric for [-3,-1,1,3]', function(){
            assert.equal(app.arithGeo([-3,-1,1,3]), 'Arithmetic');
        });

        it('should  return Arithmetic for [0,3,6,9,11,14,17,20]', function(){
            assert.equal(app.arithGeo([0,3,6,9]), 'Arithmetic');
        });

        it('should  return Geometric for [1,3,9,27]', function(){
            assert.equal(app.arithGeo([1,3,9,27]), 'Geometric');
        });

        it('should  return Geometric for [100,20,5,1]', function(){
            assert.equal(app.arithGeo([1,3,9,27]), 'Geometric');
        });

        it('should  return Geometric for [10,5,2.5]', function(){
            assert.equal(app.arithGeo([1,3,9,27]), 'Geometric');
        });

        it('should  return -1 for [1,3,3,54,9]', function(){
            assert.equal(app.arithGeo([1,3,3,54,9]), -1);
        });

        it('should  return -1 for [1,1,1,4,9]', function(){
            assert.equal(app.arithGeo([1,1,1,4,9]), -1);
        });

        it('should  return -1 for [1]', function(){
            assert.equal(app.arithGeo([1]), 'both');
        });
    })

    describe('Handle invlaid input', function(){
        it('should return undefined for "abc" ', function(){
            assert.equal(app.arithGeo('abc'), 'Undefind');
        });

    })
})