'use strict';

module.exports = {

    arithGeo: (array) => {
        //check if the array is empty
        if(array.length < 1 ){
            return 0;
        }
        else{
            //collect the the diffrence or quaitent of the array values
            const arith = array[1] - array[0];
            const arith_revers = array[0] - array[1];
            const geo = array[1] / array[0];
            const geo_revers = array[0] / array[1]

            //set arithmetic and geometric variables to zero
            let arithmetic = true;
            let geometric = true;

            //loop through to determine if its geometric or arithmetic
            for(let i =0; i < array.length-1; i++ ){
                
                if(array[i+1] - array[i] != arith || array[i]-array[i+1] != arith_revers){
                    arithmetic = false;
                }

                if(array[i+1] / array[i] != geo || array[i]/array[i+1] != geo_revers){
                    geometric = false;
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