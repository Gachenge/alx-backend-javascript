const Utils = {
    calculateNumber(type, a, b) {
        if (type === 'SUM'){
            return(Math.round(a) + Math.round(b));
        }
        else if (type === 'SUBTRACT') {
            return(Math.round(a) - Math.round(b));
        }
        else if (type === 'DIVIDE') {
            x = Math.round(b);
            if (x === 0){
                return("Error")
            }
            else{
                return (Math.round(a)/x);
            }
        }
    }
}

module.exports = Utils;
