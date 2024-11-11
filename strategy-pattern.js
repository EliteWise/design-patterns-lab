class PaypalPayment {
    pay(amount) {
        console.log(`Paypal payment: ${amount}`);
    }
}

class CreditCardPayment {
    pay(amount) {
        console.log(`Credit card payment: ${amount}`);
    }
}

class BankTransferPayment {
    pay(amount) {
        console.log(`Bank transfer payment: ${amount}`);
    }
}

class PaymentContext {
    constructor(paymentMethod) {
        if(!paymentMethod || typeof paymentMethod.pay !== 'function') {
            throw new Error('Invalid payment method');
        }
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount) {
        if(amount <= 0) {
            throw new Error('Invalid amount');
        }
        this.paymentMethod.pay(amount);
    }

}

try {
    const paypalPayment = new PaypalPayment();
    const paymentContext = new PaymentContext(paypalPayment);
    paymentContext.processPayment(100);
} catch(error) {
    console.log(error.message);
}

