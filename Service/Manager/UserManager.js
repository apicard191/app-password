import userAPIService from '../API/UserAPIService';

class UserManager {

    login(username, password) {
        return userAPIService.login(username, password);
    }

    get() {
        return {
            username: 'apc'
        }
    }
}

const userManager = new UserManager();

export default userManager;
