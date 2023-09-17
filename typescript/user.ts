
/*
create an object with an inferred type which includes
name: stirng and id:number
*/
const user = {
    name: 'John',
    id: 0
}

/*
you can explicitly declare the type of the object using
an interface declaration
*/
interface User {
    name: string;
    id: number;
}

// You can use an interface declaration with classes as well
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;   
    }
}

const user4: User = new UserAccount('Murphy', 1);

/* 
you can then declare that a JavaScript object conforms to the shape /of your new interface by using syntax like : TypeName after a variable declaration 
*/
const user2: User = {
    name: 'John',
    id: 0   
}

/*const user3: User = {
    username: "John",
}*/

function deleteUser(user: User) {

}

function getAdminUser(): User {
    return {
        name: 'John',
        id: 0
    }
}

function addNumber(x: number, y: number): number {
    return x + y;
}