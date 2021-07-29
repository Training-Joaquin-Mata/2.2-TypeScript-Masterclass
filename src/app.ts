const person={
    name: 'Joaquin',
    age: 24
};

type Person = typeof person; 

const anotherPerson: Person={
        name: '',
        age: 0
};