interface User {
    name: string;
    id: number;
    age: number;
}

interface Admin {
    name: string;
}

function logProperty<T extends User | Admin>(user: T, key: keyof T): void {
    const value = user[key];
    console.log(`${String(key)} is ${value}`);
}

const u1: User = {
    name: "Alice",
    id: 1,
    age: 30
};

logProperty(u1, "name"); // User's name is Alice
logProperty(u1, "id");   // User's id is 1
logProperty(u1, "age");  // User's age is 30

const a1: Admin = {
    name: "Bob"
};

logProperty(a1, "name"); // User's name is Bob
