class User {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

class Admin {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function printInfo(arg: User | Admin) {
    if (arg instanceof User) {
        console.log(`User: ${arg.name}, ID: ${arg.id}`);
    } else {
        console.log(`Admin: ${arg.name}`);
    }
}

const user = new User("Alice", 1);
const admin = new Admin("Bob");

printInfo(user);  // Output: User: Alice, ID: 1
printInfo(admin); // Output: Admin: Bob

function printInfo2(arg: User | Admin) {
    if ("id" in arg) {
        console.log(`User: ${arg.name}, ID: ${arg.id}`);
    } else {
        console.log(`Admin: ${arg.name}`);
    }
}

printInfo2(user);  // Output: User: Alice, ID: 1
printInfo2(admin); // Output: Admin: Bob
