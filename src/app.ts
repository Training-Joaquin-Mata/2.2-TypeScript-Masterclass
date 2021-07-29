
//<---------------- “typeof” Type Queries
// const person={
//     name: 'Joaquin',
//     age: 24
// };

// type Person = typeof person; 

// const anotherPerson: Person={
//         name: '',
//         age: 0
// };

//<---------------- “keyof” Index Type Queries

const person={
    name: 'Joaquin',
    age: 24
};

type Person = typeof person; 

type PersonKeys = keyof Person; // name | age

type PersonTyoes = Person[PersonKeys];

const anotherPerson: Person={
        name: '',
        age: 0
};

