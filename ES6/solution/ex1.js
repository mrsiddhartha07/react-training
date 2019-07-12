const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var divisiblityChecker = function divisiblityChecker(arr) {
 return array.filter(function(value){
    if(!(value%3)) {
        return true;
    }
 })
}

console.log(divisiblityChecker(array));