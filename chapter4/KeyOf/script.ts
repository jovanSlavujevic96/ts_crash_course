interface User {
    name: string;
    id: number;
    age: number;
}

const u1: User = {
    name: "Alice",
    id: 1,
    age: 30
};

function logUserProperty(user: User, key: keyof User) {
    const value = user[key];
    console.log(`User's ${key} is ${value}`);
}

logUserProperty(u1, "name"); // User's name is Alice
logUserProperty(u1, "id");   // User's id is 1
logUserProperty(u1, "age");  // User's age is 30
