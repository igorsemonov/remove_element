
const arr = [3, 4, 6, 'text', 0, 9, null, 8.98, undefined];

function removeElement(arr, elem, newElem) {
    
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {

        arr[i] === elem ? newArr.push(newElem) : newArr.push(arr[i]);

    }

    return newArr;

}

const result = removeElement(arr, null, 'NULL');

console.log(result);