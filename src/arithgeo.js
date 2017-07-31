'use strict';

module.exports = {

    arithGeo: (array) => {
        if(array.length < 1 ){
            return 0;
        }
        else{
            var arith = array[1] - array[0];
            var geo = array[1] / array[0];

            var arithmetic = true;
            var geometric = true;

            for(var i =0; i < array.length-1; i++ ){
                
                if(array[i+1] - array[i] != arith ){
                    var arithmetic = false;
                }

                if(array[i+1] / array[i] != geo){
                   var geometric = false;
                }
                
            }

            if(arithmetic == true){
                return 'Arithmetic';

            }else if(geometric == true){
                return 'Geometric';

            }else if(arithmetic == false && geometric == false){
                return -1 ;
            }
        }
    }
}