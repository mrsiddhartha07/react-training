const array = [1,2,3,4,5,6,7,8,9]

var arrayFilter = function _arrayFilter(arr) {
    let [first , arrRest] = [arr[0] , arr.splice(1)]
    console.log(arrRest);
}

arrayFilter(array);