let text = '';
let nodes = document.querySelectorAll('h1,h2,h3');
// Write code here 
for ( let node of nodes ) {
    console.log(node.innerHTML)
    concat(text, node.innerHTML.charAt(0))
}; 

console.log( text ); 
    let text = '';
    let nodes = document.querySelectorAll('h1,h2,h3');
    // Write code here 
    for ( let node of nodes ) {
    if(typeof(node.innerHTML.charAt(0)) === 'string') {
        console.log(node.innerHTML.charAt(0))
        text.concat(",",node.innerHTML.charAt(0))
        console.log(text)
    }
    }; 

    console.log( text );