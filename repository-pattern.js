class UserRepository {
    constructor(database) {
        this.database = database;
    }

    getUserById(id) {
        return this.database.find(user => user.id === id);
    }

    addUser(user) {
        this.database.push(user);
    }
}

const mockDatabase = [
    {
        id: 1,
        name: 'User 1',
        email: 'user1@example.com'
    },
    {
        id: 2,
        name: 'User 2',
        email: 'user2@example.com'
    }
]

userRepository = new UserRepository(mockDatabase);
userRepository.addUser(
    {
        id: 3,
        name: 'User 3',
        email: 'user3@example.com'
    }
);
console.log(userRepository.getUserById(3));