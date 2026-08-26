function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}

function concatenate(arg1: string, arg2: string) {
    return arg1 + arg2;
}

function check(arg: number) {
    if (arg > 2) {
        return false
    }
    return true
}

const a1 = 2
const a2 = 3

const result = add(a1, a2)
console.log(result)
console.log(typeof result)

const result2 = concatenate(String(a1), String(a2))
console.log(result2)
console.log(typeof result2)
