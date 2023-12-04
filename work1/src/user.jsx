//ES6
export default class user {
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}

export function printNmae(user)
{
    console.log(`user name is ${user.name}`);
}

export function printAge(user)
{
    console.log(`user age is ${user.age}`);
}