type Addable = number | string;

function add(arg1: Addable, arg2: Addable) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 + arg2;
    }

    if (typeof arg1 === "string" && typeof arg2 === "string") {
        return arg1 + arg2;
    }

    return; // can't be void because of the return type of the function, but will be undefined
}

const a1 = 'Hello';
const a2 = ' World';
const r1 = add(a1, a2);
console.log(r1);

const a3 = 2;
const a4 = 3;
const r2 = add(a3, a4);
console.log(r2);
