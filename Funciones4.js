x = EncuentreMayor(1, 123, 500, 115, 44, 88);

function EncuentreMayor(){
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max; 
}
