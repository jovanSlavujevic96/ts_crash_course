function firstElement<T>(arr: T[]) {
    return arr[0];
}

const arr1 = [1,2,3];
console.log(firstElement(arr1));

const arr2 = [true, false, true];
console.log(firstElement(arr2));

const arr3 = ['true', false, true];
console.log(firstElement(arr3));

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output) {
    return arr.map(func);
}

const r1 = map(['1', '2', '3'], (n) => parseInt(n));
console.log(r1);
