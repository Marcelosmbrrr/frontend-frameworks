import Cookies from 'js-cookie';

class TokenValidation {

    exec() {

        const token = Cookies.get('vue.token');

        if (!token) {
            return false;
        }

        return true;

    }
}

export { TokenValidation };