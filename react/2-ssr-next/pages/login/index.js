
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
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="login" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img class="w-8 h-8 mr-2 " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="logo" />
          <img class="w-8 h-8 mr-2 " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="logo" />
          NextJS
        </Link>
        <div
          class="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-lg"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" name="email" id="email" {...register('email', { required: true, maxLength: 255, pattern: /^\S+@\S+\.\S+$/ })} className={`bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="name@company.com" required="" />
                {errors.email && <span className='text-sm text-red-300'>{errors.email.message}</span>}
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password" {...register('password', { required: true, min: 10, maxLength: 255 })} placeholder="••••••••" className={`bg-gray-50 border ${errors.password ? 'border-red-300' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500`} required="" />
                {errors.password && <span className='text-sm text-red-300'>{errors.password.message}</span>}
              </div>
              <div class="flex items-center justify-between">
              </div>
              <button type="submit" class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Sign in</button>
              <p class="text-sm font-light text-gray-400">
                Don’t have an account yet? <Link href="registration" class="font-medium text-sky-600 hover:underline dark:text-sky-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
