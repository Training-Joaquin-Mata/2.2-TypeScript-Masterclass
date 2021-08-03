//<--------------------- Function generics

class Pizza{
    constructor(private name: string, private price: number){

    }
}

// class List {
//     private list: any[];

//     addItem(item: any): void{
//         this.list.push(item);
//     }

//     getList(): any[]{
//         return this.list
//     }
// }
// Al poner el <T> podemos hacer que la lista sea del tipo que querramos, se podria crear en este caso una lista del tipo Pizza
class List<T> {
    private list: T[];

    addItem(item: T): void{
        this.list.push(item);
    }

    getList(): T[]{
        return this.list
    }
}

// esta const va a generar algo del tipo any[]
// const list = new List();

const list = new List<Pizza>();

list.addItem(new Pizza('Pepproni', 15));

const pizzas = list.getList();


class Coupon {
    constructor(private name: string){

    }
}

const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('PIZZA25'))

