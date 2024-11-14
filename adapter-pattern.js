class StripePayment {
    stripePay(amount) {
        console.log(`Paid ${amount} with Stripe`);
    }
}

class PaypalPayment {
    paypalPay(amount) {
        console.log(`Paid ${amount} with Paypal`);
    }
}

class StripeAdapter {
    constructor() {
        this.stripe = new StripePayment();
    }
    
    pay(amount) {
        this.stripe.stripePay(amount);
    }
}

class PaypalAdapter {
    constructor() {
        this.paypal = new PaypalPayment();
    }

    pay(amount) {
        this.paypal.paypalPay(amount);
    }
}

function processPayment(paymentType, amount) {
    paymentType.pay(amount);
}

const stripeAdapter = new StripeAdapter();
const paypalAdapter = new PaypalAdapter();

processPayment(stripeAdapter, 100);
processPayment(paypalAdapter, 200);