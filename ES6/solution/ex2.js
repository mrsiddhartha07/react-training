const meta = {
    title:'Destructuring Assignment',
    authors:[{firstname:'Craig',lastname:'Buckler'}],
    publisher:{
        name:'SitePoint',
        url:'http://www.sitepoint.com/'
    }
}

// const {title:doc} = meta,
//         [{firstname:name}] = meta.authors,
//         {url:web} = meta.publisher;

    const [{title:doc} , [{firstname:name}], {url:web}]= [meta, meta.authors ,meta.publisher];

console.log(doc,name,web);