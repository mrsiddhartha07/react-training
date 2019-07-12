const person = {
    first: 'Mohan',
    last: 'Singh',
    address: {
        lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
        city: 'Gurgaon',
        state: 'Haryana'
    }
}

var extractLine = function _extractLine(obj) {
    console.log(obj.address.lines[1])
}   
extractLine(person)