interface User {
    name: string;
    age: number;
    courses: string[];
}

interface UserExtended extends User {
    permissionLevel: string;
}

const user1: User = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'Typescript'],
}
const user2: UserExtended = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: 'admin',
}

function printUser(user: User) {
    console.log("user name: ",user.name);
    console.log("user age: ", user.age);
    console.log("user courses: ",user.courses);
}
printUser(user1)
printUser(user2)
