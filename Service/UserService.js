import {UserAPIService} from './API/UserAPIService';

export class UserService {
    constructor() {
        this.userAPIService = new UserAPIService();
    }

    login(username, password) {
        return this.userAPIService.login(username, password);
    }

    get() {
        return {
            username: 'apc'
        }
    }
}
