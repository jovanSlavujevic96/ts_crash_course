const user1 = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'Typescript'],
}
const user2 = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
}

function printUser(user: { name: string, age: number, courses: string[] }): void {
    console.log("user name: ",user.name);
    console.log("user age: ", user.age);
    console.log("user courses: ",user.courses);
}
printUser(user1)
printUser(user2)
