
// <-----------------  Intersection Types
interface Order{
    id: string;
    amount: number;
    currency: string;
}

interface Stripe{
    card: string;
    cvc: string;
}

interface PayPal{
    email: string;
}

type CheckoutCard = Order  & Stripe;
type CheckoutPayPal= Order & PayPal;
// type CheckoutABC= Order & {name: string .....};

const order: Order = {
    id: 'afcadf',
    amount: 100,
    currency: 'USD'
}

const orderCard: CheckoutCard= { 
   ...order,
    card:'1111 2222 3333 4444', 
    cvc: '123'
}

const orderPayPal: CheckoutPayPal={
    ...order,
    email:'something@something.com'
}
