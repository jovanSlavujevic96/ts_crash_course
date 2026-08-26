type User = { name: string, age: number, courses: string[] }

interface UserInterface {
    name: string;
    age: number;
    courses: string[];
}

const user1: User = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'Typescript'],
}
const user2: UserInterface = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
}

function printUser(user: UserInterface): void {
    console.log("user name: ",user.name);
    console.log("user age: ", user.age);
    console.log("user courses: ",user.courses);
}
printUser(user1)
printUser(user2)
