function printAll(arg: string | string[]) {
    if (typeof arg === 'object') {
        // if it is an object, then it is not a string, so it must be an array of strings
        arg.forEach((value) => console.log(value));
    }

    if (typeof arg === 'string') {
        console.log(arg);
    }
}


const s1 = "Jan"
printAll(s1);

const s2 = ["Jan", "Daniel", "Kowalski"];
printAll(s2);
