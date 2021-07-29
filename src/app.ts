function myFunction(){
    console.log(this);
}

myFunction();

const myObj={
    myMethod(){
        console.log('Object:::', this);
    },
}

myObj.myMethod();


class MyClass{

    myMethod(){
        console.log('Class:::', this);
    }
}

const myInstance = new MyClass();

myInstance.myMethod();