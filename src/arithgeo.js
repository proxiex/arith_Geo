'use strict';

module.exports = {

    arithGeo: (array) => {
        //check if the array is empty
        if(array.length < 1 ){
            return 0;
        }
        else{
            //collect the the diffrence or quaitent of the array values
            var arith = array[1] - array[0];
            var geo = array[1] / array[0];

            //set arithmetic and geometric variables to zero
            var arithmetic = true;
            var geometric = true;

            //loop through to determine if its geometric or arithmetic
            for(var i =0; i < array.length-1; i++ ){
                
                if(array[i+1] - array[i] != arith ){
                    var arithmetic = false;
                }

                if(array[i+1] / array[i] != geo){
                   var geometric = false;
                }
                
            }

            //it is arithmetic; return value
            if(arithmetic == true){
                return 'Arithmetic';

            //it is Geometric; retune values
            }else if(geometric == true){
                return 'Geometric';

            //its niether, return value
            }else if(arithmetic == false && geometric == false){
                return -1 ;
            }
        }
    }
}