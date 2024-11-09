class UserRepository {
    getUserById(id) {
        return {
            id: id,
            name: 'Connor'
        };
    }
}

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getUserProfile(id) {
        const user = this.userRepository.getUserById(id);

        if (!user) {
            throw new Error('User not found');
        }

        return {
            id: user.id,
            name: user.name
        };
    }
}

// Injection
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

try {
    console.log(userService.getUserProfile(1));
} catch (error) {
    console.log(error.message);
}