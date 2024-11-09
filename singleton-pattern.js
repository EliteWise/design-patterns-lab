class Database {
    constructor() {
        if(Database.instance) {
            return Database.instance;
        }
        this.connection = this.connect();
        Database.instance = this;
    }

    connect() {
        console.log('Connecting to database...');
        return {};
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // True because the second instance is not created, instead the first instance is returned.