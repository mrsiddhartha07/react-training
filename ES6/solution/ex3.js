const books = [{
    title: 'Full Stack JavaScript',
    author: 'Colin Ihrig and Adam Bretz',
    url: 'http://www.sitepoint.com/store/full-stack-javascript/'
}, {
    title: 'JavaScript: Novice to Ninja',
    author: 'Darren Jones',
    url: 'http://www.sitepoint.com/store/leaern-javascript/'
}, {
    title: 'Jump Start CSS',
    author: 'Louis Lazaris',
    url: 'http://www.sitepoint.com/store/jump-start-css/'
}, ]

var bookKeeper = function _bookKeeper(booksarray) {
    var filteredArray = booksarray.map(function(element){
        return {title,author} =  element;
    });
    console.log(filteredArray);
}

bookKeeper(books);