var customConcat = function _customConcat (separator,args) {
    return args.join(separator) 
};

customConcat("-",[1,2,3,4,5,6,7,8,9,10]);

var htmlString = function _htmlString (typeoflist) {
    return `<${typeoflist}l>list</${typeoflist}l>`
};

var factorialCal = function _fatorialCal (num) {
    if(num === 0) {
        return 1;
    }
    else {
       return num * factorialCal(num-1);
    }
}

console.log(factorialCal(20));

