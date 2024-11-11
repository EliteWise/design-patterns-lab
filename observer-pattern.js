const EventEmitter = require('events');

class Product extends EventEmitter {
    setPrice(newPrice) {
        this.price = newPrice;
        this.emit('priceChanged', newPrice);
    }
}

const notifyClient = (price) => {
    console.log(`Client notified of price change: ${price}`);
}

const notifyStockManager = (price) => {
    console.log(`Stock Manager alerted with new price: ${price}`);
}

const product = new Product();
product.on('priceChanged', notifyClient);
product.on('priceChanged', notifyStockManager);

product.setPrice(100);