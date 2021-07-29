//<---------------- ReadOnly Mapped Type
interface Person{
    name: string;
    age: number;
};

const person: Person = {
    name: 'Joaquin',
    age: 24
};


type MyReadOnly<T>={
    readonly[P in keyof T]: T[P];
}

function freeze<T>(obj: T): MyReadOnly<T>{
return Object.freeze(obj);
}

const newPerson = freeze(person);
