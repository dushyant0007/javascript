// node - To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

/*
# in modules (ES2020) we can now use await keyword outside of a async fun 
# which is called top level await
*/

// ////////////////////////// await in modules

const lala = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log( await lala.json(),'***********');

/*
this is all grate and all useful -  
this actually blocks the execution of entire module 
*/

//---

const getLastPost = async function(){
    const lala = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await lala.json();
    return {title:data.at(-1).title,test:data.at(-1).body};
}
const lastPost = getLastPost().then((last)=>console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2)