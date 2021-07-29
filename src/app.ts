// class MyClass{

//     myMethod(){
//         console.log('Class:::', this);
//     }
// }

// const myInstance = new MyClass();

// myInstance.myMethod();


// //Object Literal

// const myObj={
//     myMethod(){
//         console.log('Object:::', this);
//     },
// }

// myObj.myMethod();

// // Function

// function myFunction(...text: string[]): any{
//     console.log('Function:::', this, text);
// }

// const bindFunction = myFunction.bind(myObj, 'ABC', 'DEF');
// bindFunction();
// myFunction().call(myObj,'ABC', 'DEF' );
// myFunction().apply(myObj,['ABC', 'DEF']);


// class MyClass{
//     myMethod(){
//         const foo =123;

//         console.log('1', this);
//         setTimeout(()=>{
//             console.log(foo);
//             console.log(this);
//             //lexical scope
//         }, 0)
//     }
// }


// const myInstance = new MyClass();

// myInstance.myMethod();


const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event){
        event.preventDefault();
        console.log(this.addEventListener);
}

elem.addEventListener('click', handleClick, false);



