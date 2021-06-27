console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const promis = new Promise((resolve, reject) => {
    console.log("Promise pending message");
})
console.log(promis);


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let promise2 = new Promise((resolve, reject) => [
    resolve('Promise Data')
])
console.log(promise2);

let promise3 = new Promise((res, rej) => {
    res("Promise data")
})
    .then(result => {
        console.log("Here is resolve data: ", result)
    },
        err => {
            console.log("Error message", err)
        });

console.log(promise3);


//another example
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 3000);
});
console.log(myPromise);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

let prom2 = new Promise((resolve, reject) => {
    reject("Ooops, there is an error...")
})
    .catch(err => {
    console.log("Error message: " + err)
});
console.log(prom2);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let prom4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise data")
    }, 3000)
})
    .then(
    result => {
        console.log("Result: " + result)
    }
)
console.log(prom4);


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`

let handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName: any) {
        return `Promise is resolved with data: ${paramName}`;
    },
    onError(paramName: any) {
        return `Promise is rejected with error: ${paramName}`
    }
}

console.log(handlePromise.onSuccess("Tania"));
console.log(handlePromise.onError("Sherif"));

// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

/*export const createPromise = () => {
    let newPromise = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
    })

    handlePromise.promise = newPromise;

    console.log(newPromise);
    console.log(handlePromise)

}*/


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("My name is ")
    }, 1000)
})

console.log(promise4);

function onSuccess(param: any) {
    let resultString = `${param} Tania`;
}
function print(param: any) {
    console.log(param)
}


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}


// just a plug
export default () => {
};

//examples
/*function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done")
        }, 3000)
    })
        .then(result => {
            console.log(result)
        },
            error => {
            return new Error("ERROR!: " + error)
            })
    // ваш код
}
console.log(delay());*/

/*
console.log('Request data...');

setTimeout(() => {
    console.log('Preparing data...')
    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }
    setTimeout(() => {
        // backendData.modified = true;
        console.log('Data received', backendData)

    }, 2000)
}, 2000)*/

/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        };
        resolve(backendData)
    }, 2000)
}).then((data: any) => {
        console.log('Promise resolved...', data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.modified = true
                resolve(data)
            }, 2000)
        })
    })
    .then((clientData: any) => {
        console.log('Data received', clientData);
        clientData.fromPromise = true;
        return clientData;
    })
    .then(data => {
        console.log("Modified", data)
    })
    .catch(err => console.error("Error: ", err))
    .finally(()=> {
        console.log('Finally')
    })

console.log(p);*/
