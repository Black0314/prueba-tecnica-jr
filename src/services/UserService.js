class UserService {
    constructor() {
        this.baseURL = 'https://jsonplaceholder.typicode.com'
}

async getUsers() {
    try {
        const response = await fetch (`${this.baseURL}/users`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        return users.map(users => ({
            ...users,
            avatar: `https://i.pravatar.cc/150?u=${users.email}`
        }))

} catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Nowe puede cargar los usuarios. Intente de nuevo más tarde.'); 
}
}

async getUserById(id) {
    try {
        const response = await fetch(`${this.baseURL}/users/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user = await response.json();

        return {
            ...user,
            avatar: `https://i.pravatar.cc/150?u=${user.id}`
        };

    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('No se puede cargar el usuario. Intente de nuevo más tarde.');
    }    
}
}
export default new UserService()