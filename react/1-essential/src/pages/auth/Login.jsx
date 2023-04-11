import * as React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const initialForm = { email: "", password: "" };
const initialFormError = { email: { error: false, message: "" }, password: { error: false, message: "" } };

export function Login() {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { login } = useAuth();
    const [form, setForm] = React.useState(initialForm);
    const [formError, setFormError] = React.useState(initialFormError);

    function handleSubmit() {

        if (!submissionValidation()) {
            return;
        }

        requestServer();
    }

    function submissionValidation() {

        setFormError(initialFormError);

        let is_valid = true;
        for (let field in form) {
            if (form[field].length === 0) {
                setFormError((prev) => {
                    return {
                        ...prev,
                        [field]: { error: true, message: `${field} is necessary` }
                    }
                });
                is_valid = false;
            }
        }

        return is_valid;
    }

    async function requestServer() {
        await login(form);
        enqueueSnackbar("Login successful!", { variant: "success" });

        setTimeout(() => {
            navigate("/internal", { replace: true });
        }, 1000);
    }

    function handleChange(e) {
        setForm((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="mx-auto h-12 w-auto" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="relative block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Email address"
                                onChange={handleChange}
                            />
                            <span className='text-red-500 text-sm'>{formError.email.message}</span>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="relative block w-full rounded border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <span className='text-red-500 text-sm'>{formError.password.message}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}