var request = function _request(obj) {
    console.log("\x1b[34m",obj.url)
    console.log("\x1b[32m",obj.method)
    console.log("\x1b[37m")

}
request({url: 'http://www.google.com', method: 'GET' });