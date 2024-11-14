class QueryBuilder {
    constructor() {
        this.query = {};
    }

    select(fields) {
        this.query.select = fields;
        return this;
    }

    from(table) {
        this.query.from = table;
        return this;
    }

    where(condition) {
        this.query.where = condition;
        return this;
    }

    build() {
        return this.query;
    }
}

const query = new QueryBuilder()
    .select(['name', 'age'])
    .from('users')
    .where({ age: { $gt: 18 } })
    .build();

console.log(query);