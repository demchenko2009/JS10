// Перепишіть колбек-функції на стрілки

// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray 
// з різними масивами та функціями-колбеками, щоб виконати наступні операції:


// Порахувати суму всіх елементів масиву.
const processArray =  (array,callback) => callback(array)

const summ =  (summ) => {
    let sub = 0
    for (let i = 0; i < summ.length; i+=1) {
sub += summ[i]
        
    }
    return sub
}



// Знайти мінімальний елемент масиву.
const minus =  (arrey) => {
            let min = arrey[0]
    for (let i = 0; i < arrey.length; i+=1) {

if (arrey[i]<min) {
    min = arrey[i]
}
        
    }
    return min
}






// Знайти максимальний елемент масиву.

const plus =  (arrey)  => {
            let max = arrey[0]
    for (let i = 0; i < arrey.length; i+=1) {

if (arrey[i]>max) {
    max = arrey[i]
}
        
    }
    return max
}

const massiv = [80,44,65,81,21,14]
console.log(processArray(massiv,summ));
console.log(processArray(massiv,minus));
console.log(processArray(massiv,plus));







//  2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:




// Перепишіть колбеки на стрілкові функції


const  operate = (a, b, callback) =>   callback(a,b)
// Додавання.
const  pluss = (a,b) => {
const result = a + b;
return result
}


// Віднімання.
const minuss = (a,b) => {
const result = a - b;
return result
}


// Ділення.
const dursch = (a,b) => {
const result = a / b;
return result
}
// Множення.
  const mahl = (a,b)  =>{
const result = a * b;
return result

}
console.log(operate(4,5,pluss));
console.log(operate(6,5,minuss));
console.log(operate(10,5,dursch));
console.log(operate(5,5,mahl));