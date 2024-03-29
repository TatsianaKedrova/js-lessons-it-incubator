console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI

//My examples


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind

/*let obj = {
    name: "Evgen",
    sayName(a, b) {
        console.log('this.name', this.name);
        console.log('a', a);
        console.log('b', b)
    }
}*/

/*let obj2 = {
    name: "Hanna"
}

let resultFunc = obj.sayName.bind(obj2, 10);
resultFunc(50);

let obj3 = {
    name: "Yo"
}*/



/*Function.prototype._bind = function (context, ...args) {
    // const _this = this;
    // return function (...rgs2) {
    //     return _this.apply(context, [...args, ...rgs2])
    // }
    return (...rgs2)=> this.apply(context, [...args, ...rgs2]);
}

let resultFunc2 = obj.sayName._bind(obj3, 75);*/


// just a plug
export default () => {};