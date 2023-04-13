
import * as React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required")
}).required();

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleLogin(data) {
    console.log(data)
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="login" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img className="w-8 h-8 mr-2 " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="logo" />
          <img className="w-8 h-8 mr-2 " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="logo" />
          NextJS
        </Link>
        <div
          className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-lg"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" name="email" id="email" {...register('email')} className={`bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-300'} outline-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5`} placeholder="name@company.com" required="" />
                {errors.email && <span className='text-sm text-red-300'>{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password" {...register('password')} placeholder="••••••••" className={`bg-gray-50 border ${errors.password ? 'border-red-300' : 'border-gray-300'} outline-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5`} required="" />
                {errors.password && <span className='text-sm text-red-300'>{errors.password.message}</span>}
              </div>
              <div className="flex items-center justify-between">
              </div>
              <button type="submit" className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Sign in</button>
              <p className="text-sm font-light text-gray-400">
                Don’t have an account yet? <Link href="registration" className="font-medium text-sky-600 hover:underline dark:text-sky-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
