var mapperFns = function mapperFns(element){
    return {
        isEven : element%2 ? true : false,
        number : element,
        squared : element*element
    }
}

console.log([1,2,3].map(mapperFns));

