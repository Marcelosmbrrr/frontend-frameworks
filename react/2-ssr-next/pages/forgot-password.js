import * as React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// Custom
import axios from '../services/api';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    password_confirmation: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
}).required();


export default function ForgotPassword() {

    const { login } = useAuth();
    const { ThemeButton } = useTheme();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className='absolute top-2 right-2'>
                <ThemeButton />
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="logo" />
                    NextJS
                </a>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Change Password
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                            <span className="text-sm text-red-400">{errors.email?.message}</span>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input type="password" id="password" placeholder="••••••••" {...register("password")} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <span className="text-sm text-red-400">{errors.password?.message}</span>
                        </div>
                        <div>
                            <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="text" id="password_confirmation" placeholder="••••••••" {...register("password_confirmation")} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <span className="text-sm text-red-400">{errors.password_confirmation?.message}</span>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link >
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}