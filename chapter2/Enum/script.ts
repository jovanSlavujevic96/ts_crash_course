enum PermissionLevel {
    Instructor = 'Instructor',
    Student = 'Student',
    Admin = 'Admin'
}

type User = {
    name: string;
    age: number;
    courses: string[];
}

type Permission = {
    permissionLevel: PermissionLevel;
}

type UserExtended = User & Permission; // Intersection type

const user1: UserExtended = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'Typescript'],
    permissionLevel: PermissionLevel.Instructor,
}
const user2: UserExtended = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: PermissionLevel.Student,
}

function printUser(user: UserExtended) {
    console.log("user name: ",user.name);
    console.log("user age: ", user.age);
    console.log("user courses: ",user.courses);
    console.log("user permission level: ", user.permissionLevel);
}
printUser(user1)
printUser(user2)
