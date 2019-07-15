

var wrap = function wrap(str) {
 var [arr] = [str.split()]
 console.log(arr)
}

wrap("package");

var unwrap = function _unwrap(arry) {
    var [strng] = [arry.join()]
    console.log(strng);
}
unwrap(["package"])