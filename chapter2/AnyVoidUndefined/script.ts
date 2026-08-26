 /** any shouldn't be used, because it corrupts idea of TS */
function foo(arg: any) {
    if (arg) {
        console.log('has value: ', arg)
    }
    else {
        console.log('is undefined: ', arg)
    }
    return; // void // do not return the value
}

// | means we allow both types, but we don't know which one will be used
let a: number | undefined = undefined; // undefined is a type, but it is not a value

foo(a)

a = 2

foo(a)
