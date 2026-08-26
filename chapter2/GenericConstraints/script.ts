interface UserList {
    users: string[];
    length: number;
}

interface IsSized {
    length: number;
}

function lengthComparison<Type extends IsSized>(a: Type, b: Type) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

const in1 = [1, 2, 3];
const in2 = [4, 5];

const r1 = lengthComparison(in1, in2);
console.log(r1); // Output: [1, 2, 3] 

const in3: UserList = { users: ['1', '2', '3'], length: 3 };
const in4: UserList = { users: ['4', '5'], length: 2 };

const r2 = lengthComparison(in3, in4);
console.log(r2); // Output: { users: ['1', '2', '3'], length: 3 }
