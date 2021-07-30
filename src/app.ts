// // <-----------------  Intersection Types
// interface Order{
//     id: string;
//     amount: number;
//     currency: string;
// }

// interface Stripe{
//     card: string;
//     cvc: string;
// }

// interface PayPal{
//     email: string;
// }

// type CheckoutCard = Order  & Stripe;
// type CheckoutPayPal= Order & PayPal;
// // type CheckoutABC= Order & {name: string .....};

// const order: Order = {
//     id: 'afcadf',
//     amount: 100,
//     currency: 'USD'
// }

// const orderCard: CheckoutCard= { 
//    ...order,
//     card:'1111 2222 3333 4444', 
//     cvc: '123'
// }

// const orderPayPal: CheckoutPayPal={
//     ...order,
//     email:'something@something.com'
// }

// <-----------------  Discriminated (Tagged) Unions
interface Order{
    id: string;
    amount: number;
    currency: string;
}

interface Stripe{
    type: 'stripe';
    card: string;
    cvc: string;
}

interface PayPal{
    type: 'paypal';
    email: string;
}

type CheckoutCard = Order  & Stripe;
type CheckoutPayPal= Order & PayPal;

const order: Order = {
    id: 'afcadf',
    amount: 100,
    currency: 'USD'
}

const orderCard: CheckoutCard= { 
   ...order,
   type: 'stripe',
    card:'1111 2222 3333 4444', 
    cvc: '123'
}

const orderPayPal: CheckoutPayPal={
    ...order,
    type: 'paypal',
    email:'something@something.com'
}

// creamops un union type, y despues podemos discriminar cual queremos usar

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload){

    if(payload.type=== 'stripe' ){
        console.log(`${payload.card}, ${payload.cvc}`)
    }
    if(payload.type=== 'paypal' ){
        console.log(`${payload.email}}`)
    }
        
}