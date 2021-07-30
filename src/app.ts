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

// // el partial hace que los campos dentro de la interfaz sean opcionales, les agrega el ? 
// interface Person{
//     name: string;
//     age: number;
// };

// type MyPartial<T> ={
//     [P in keyof T]?: T[P];
// }

// function updatePerson(person: Person, prop: MyPartial<Person>){
//     return {...person, ...prop}
// }

// const person: Person = {
//     name: 'Joaquin',
//     age: 24
// };
// console.log(person)
// const upP=updatePerson(person, {name: 'name', age: 23} );
// updatePerson(person, {name: 'name', age: 23} );

// console.log(person)
// console.log(upP);


//<---------------- “Required” Mapped Type, +/- Modifiers


// // El required hace que los campós que esten dentro de la interfaz sean obligarorios, le quita el ? que los hace opcionales

// interface Person{
//     name: string;
//     age?: number;
// };



// function printAge(person: Required<Person>){
//         return `${person.name} is ${person.age}`
// }

// const person: Required<Person> = {
//     name: 'Joaquin',
//     age: 24
// };

// const age = printAge(person);

// console.log(age);


//<---------------- “Pick” Mapped Type

// Es como decirle al compilador que solo estas usando un set especifico de keys
// Lo que hace pick es regresarnos una seleccion de las propiedades del objeto

interface Person{
    name: string;
    age: number;
    address: {}
};

type MyPick<T, K extends keyof T> = {
    [P in  K]: T[P]; 
}

const person: MyPick<Person, 'name'| 'age' > = {
    name: 'Joaquin',
    age: 24
};




