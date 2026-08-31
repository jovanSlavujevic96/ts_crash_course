interface User {
    name: string;
    email?: string;
    id?: number;
}

type UserOptional = Partial<User>; // marks all of the keys as optional

let u1: User = {
    name: "Jan",
}
console.log("user u1: ", u1);

function updateUserData(user: User, data:UserOptional): User {
    return {
        ...user,
        ...data
    };
}

u1 = updateUserData(u1, { email: "jan@example.com" });
console.log("user u1: ", u1);

type UserRequired = Required<User>; // marks all of the keys as required (as non-optional)
type UserBaseInfo = Pick<User, 'name' | 'email'>; // picks only the name and email keys from User
type UserInfo = Omit<User, 'name' | 'id'>; // omits the id & name keys from User

const u2: UserRequired = {
    name: "Jan",
    email: "jan@example.com",
    id: 1
};
console.log("user required: ", u2);

const u3: UserBaseInfo = {
    name: "Jan",
    email: "jan@example.com"
};
console.log("user base info: ", u3);

const u4: UserInfo = {
    email: "jan@example.com"
};
console.log("user info: ", u4);

type UserBaseInfoRequired = Required<Pick<User, 'name' | 'email'>>; // picks only the name and email keys from User and makes them required
const u5: UserBaseInfoRequired = {
    name: "Jan",
    email: "jan@example.com"
};

console.log("user base info required: ", u5);
