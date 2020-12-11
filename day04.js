// 字面量
let a = '', b = "", c = ' ' //字符串字面量
let oArray = [1, 2, 3]
const oStudent = {}
// const oReg = \abc\

/* 
定义函数的四种方式
*/


//函数声明
function sayHello() {
    console.log('Hello,JavaScript')
} //定义了一个函数字面量


//函数表达式
const sayHello = function () {
    console.log('hello,javascript')
}  //匿名函数表达式
console.log(sayHello)
sayHello()

const sayHello = function sayHi() {
    console.log('hello,Js')
}  //命名函数表达式

//Function 构造函数,不建议使用
const sayHello = new Function("console.log('hello,js!)")

// ES6 新增的语法，箭头函数
const sayHello = () => { console.log('hello,js') }

sayHello()


const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b
    return c
}
console.log(sayHello())  //undefined;


const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b
    return c
}
console.log(sayHello())  //3

// 函数参数

const add = function (a, b) {
    return a + b
}

let a = add(2, 3)
console.log(a) //5



const add1 = function (a, b) {
    return a + b
}

let b1 = add1()
console.log(b) //NaN = not a number ,undefined + undefined

let b2 = add1(1)
console.log(b2)

let b3 = add1(1, 2, 3, 4)
console.log(b3)

let b = 1
b = Infinity   //无穷大
b = - Infinity  //负无穷大

const add2 = function (a, b) {
    let a1 = arguments.length
    console.log(a1)
    console.log(arguments[5])
    return a + b
}

let b4 = add2(1, 2, 2, 2, 3, 4);
console.log(b4)

const add3 = function () {
    let sum
    for (let i = 0; i < arguments.length; i++) {
        sum = sum = arguments[i]
    }
    return sum
}
let b5 = add3(1, 2, 4, 5, 6, 7, 8)
console.log(b5)


const add = function (...number) {
    let sum = 0
    for (const num of number) {
        sum = sum + num
    }
    return sum
}
let a1 = add(1, 2, 2)
console.log(a1)


//默认参数
const sayHi = function (studentName = 'js') {
    console.log('hello,${studengtName}')
}
sayHi()


//箭头函数
const add1 = function (...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
}

const add1 = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
}
console.log(add1(1, 2, 3))

const add2 = (a, b) => a + b;
const add3 = () => { return 3; }

const add4 = a => a + 1;
const add4 = function (a) {
    return a + 1;
}


//callback
function dance() {
    console.log('我在跳舞')
}


function sing(song, callback) {
    console.log('我在唱${song}')
    if ((typeof callback) == 'function') {
        callback()
    }
}

sing('国歌', dance)


//改写成函数表达式
const dance = function () {
    console.log("我在跳舞")
}

const sing = function (song, callback) {
    console.log('我在唱${song}')
    if (typeof callback === 'function') {
        callback()
    }
}

sing('国歌', dance)


//改写成箭头函数版本

const dance = () => { console.log('我在跳舞') }
const sing = () => {
    console.log('我在唱${song}')
    if (typeof callback == 'function') {
        callback
    }
}

sing('国歌', dance)


//用箭头函数作为回调函数
const sing = (song, callback) => {
    console.log('我在唱${song}')
    if (typeof callback === 'function') {
        callback()
    }
}
sing('国歌', () => (console.log('我在跳舞')))


//回调函数的应用
//1.数组排序 Array.sort()

const oArray = [1, 10, 2, 11, 9, 8]
console.log(oArray.sort())

const num = (a, b) => a - b
console.log(oArray.sort(num))




















//map
const oArray2 = [1, 2, 3, 4]
const oArray3


// 改写
//先定义一个数组，然后得到一个新数组
//新数组中每个元素都是旧数组中每个元素的平方，不用map的版本
const a1 = [1, 2, 3]

let a2 = []
for (let i = 0; i < a1.length; i++)




    //map 版本


    //reduce
    const a1 = [1, 2, 3]
const a2 = a1.reduce(
    (sum, curVal) => sum + curVal
)
console.log(a2)
console.log(typeof a2)


const a2 = [1, 2, 3].reduce((sum, curVal) => sum + curVal)


   