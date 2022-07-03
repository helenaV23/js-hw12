// Реализовать функцию copy(list) по копированию массива.

// Предусмотреть возможность передачи вторым аргументом функции. При копировании массива – функция применяется к каждому элементу копируемого массива.

// newList = copy(list, function(value){ return value*10; })


let arr = [5, 7, "apple", "mango", true];


function copy(list, c) {
    let newArr = [];
    for (let i = 0; i < list.length; i++) {
        newArr[i] = (typeof c === "function" && typeof list[i] === "number") ? c(list[i]) : list[i];    
    }
    return newArr; 
}

function value(a) {
    return a * 10;
}

copy(arr, value);

let newAr = copy(arr, value);

console.log(newAr);
