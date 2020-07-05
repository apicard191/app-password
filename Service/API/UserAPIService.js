export class UserAPIService {
    login(username, password) {
        return new Promise((resolve, reject) => {
            this.wait = setTimeout(() => {
                //clearTimout(this.wait);
                resolve({
                    username: username
                });
            }, 2000)
        });
    }
}
