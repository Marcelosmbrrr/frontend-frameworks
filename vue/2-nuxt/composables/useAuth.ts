interface IForm {
    email: string,
    password: string
}

interface IUser {
    name: string,
    email: string,
    role: string
}

const initialUser = JSON.stringify({ name: "", email: "", role: "" });

export default function useAuth() {

    const user = useState<IUser>('auth', () => JSON.parse(initialUser));
    const isAuthenticated = useState<boolean>('is_authenticated', () => false);

    async function signIn(form: IForm) {
        setTimeout(() => {
            // request time simulation
        }, 1000);

        if (!(form.email === "admin@gmail.com" && form.password === "123123")) {
            throw new Error('Invalid credentials.');
        }

        user.value = { name: 'Admin', email: form.email, role: 'Administrator' };
        isAuthenticated.value = true;

        return true;
    }

    async function signOut() {
        setTimeout(() => {
            // request time simulation
        }, 1000);

        user.value = JSON.parse(initialUser);
        isAuthenticated.value = false;
    }

    return {
        user,
        isAuthenticated,
        signIn,
        signOut
    };
};
