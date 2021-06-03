console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

let prom1 = new Promise((res, rej) => {
    let a = 10;
    console.log(a);
    //some async request
    //res(10);
    rej({name: 'Eugene'});
});
 console.log(prom1);

 let prom = new Promise((res, rej) => {
     // res({a: 10});
     rej('Error')
});
 console.log(prom);

 prom
     .then(res => {
     console.log("then", res)
 }, err=> {
     console.log('err', err);
     return 'URL';
 })
     .then(res2 => {
         console.log('then2', res2)
     }, err2 => {})
// just a plug
export default ()=>{};


