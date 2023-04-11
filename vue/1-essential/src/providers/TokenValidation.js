import Cookies from 'js-cookie';

class TokenValidation {

    #token;

    constructor(){
        this.#token = Cookies.get('vue.token');
    }

    exec() {
        if (!this.#token) {
            return false;
        }

        return true;
    }

    tokenParsed(){
        return JSON.parse(this.#token);
    }
}

export { TokenValidation };