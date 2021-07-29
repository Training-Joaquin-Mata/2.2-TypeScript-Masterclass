// //<---------------- ReadOnly Mapped Type
// interface Person{
//     name: string;
//     age: number;
// };

// const person: Person = {
//     name: 'Joaquin',
//     age: 24
// };


// type MyReadOnly<T>={
//     readonly[P in keyof T]: T[P];
// }

// function freeze<T>(obj: T): MyReadOnly<T>{
// return Object.freeze(obj);
// }

// const newPerson = freeze(person);

//<---------------- Partial Mapped Type
interface Person{
    name: string;
    age: number;
};

type MyPartial<T> ={
    [P in keyof T]?: T[P];
}

function updatePerson(person: Person, prop: MyPartial<Person>){
    return {...person, ...prop}
}

const person: Person = {
    name: 'Joaquin',
    age: 24
};
console.log(person)
const upP=updatePerson(person, {name: 'name', age: 23} );
updatePerson(person, {name: 'name', age: 23} );

console.log(person)
console.log(upP);



