console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string;
    surname: string;
    groupNumber: number;
    progress: number[];
}

class Student implements IStudent {
    averageMark: number;
    constructor(public name: string, public surname: string, public groupNumber: number, public progress: number[]) {
        this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length
    }

    private static sortStudents(s1: Student, s2: Student) {
        if(s1.averageMark > s2.averageMark) {
            return 1;
        } else if(s1.averageMark < s2.averageMark) {
            return -1;
        } else {
            return 0;
        }
    }
    static sort(arr: Array<Student>) {
        const template = [...arr];
        return template.sort(this.sortStudents)
    }

    private static isAllMarksEqualSomeMark(marks: number[], m: number) {
        return marks.every(mark => mark === m);
    }

    private static filterStudent(arr: Array<Student>) {
        const result: Array<Student> = [];
        arr.forEach(item => {
            if(this.isAllMarksEqualSomeMark(item.progress, 4) || this.isAllMarksEqualSomeMark(item.progress, 5)) {
                result.push(item);
            }
        });
        return result
    }
    static printGoodStudent(arr: Array<Student>) {
        this.filterStudent(arr).forEach(s => {
            console.log(`Student - ${s.surname}, Group - ${s.groupNumber};`);
        });
    }
}

let students = [
    new Student('Evgen', 'Shevchuk', 1, [4,4,4,4,4]),
    new Student('Vlad', 'Bizin', 2, [5,5,5,5,5]),
    new Student('Anna', 'Angarskaya', 2, [4,5,4,5,5])
]
console.log(Student.sort(students));


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug

class Test {

    name: string;
    testFunc: Function;
    constructor(name: string) {
        this.name = name;
        this.testFunc = function() {

        }
    }
    sayHi() {

    }

    sayBye = () => {

    }


}

let t = new Test('Evgen');
console.log(t);

let t2 = new Test('Vlad')
console.log(t.testFunc === t2.testFunc);
console.log(t.sayHi === t2.sayHi);
console.log(t.sayBye === t2.sayBye);

class Prooo {
    constructor(public name: string) {
    }
}

class Test2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    sayHi() {
        console.log('sayHi');
    }
}

class Test3 extends Test2 {
    constructor(name: string) {
        super(name);
    }
    testMethod() {

    }
}

class Test5 {
    sayHi() {

    }
    private sayBye() {

    }
}
let m = new Test5();
t.sayHi();
t.sayBye()

export default () => {
};