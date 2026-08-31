const a1 = [1,2,3];

function arraySum(arr: number[]) {
    let result = 0;
    arr.forEach((value) => {
        result += value;
    });
    return result;
}

const s1 = arraySum(a1);
console.log(s1);

// limits to only two arguments
function argumentSum(a1: number, a2: number) {
    let result = 0;
    
    result += a1;
    result += a2;

    return result;
}

const s2 = argumentSum(1, 2);
console.log(s2);

// rest parameters allow for an arbitrary number of arguments
function restArgumentSum(...args: number[]) {
    let result = 0;
    args.forEach((value) => {
        result += value;
    });
    return result;
}

const s3 = restArgumentSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(s3);

const s4 = restArgumentSum(1, 2, 3, 4, 5, 6);
console.log(s4);
