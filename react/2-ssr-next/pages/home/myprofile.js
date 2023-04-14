import * as React from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import ReplayIcon from '@mui/icons-material/Replay';
import EditIcon from '@mui/icons-material/Edit';
import { HomeLayout } from '../../components/layout/HomeLayout';
import { MyProfileController } from '../../controllers/modules/myprofile/MyProfileController';

const schema = yup.object({
    name: yup.string().required("Name is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string(),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();

export default function MyProfile(props) {

    const [data, setData] = React.useState(props.data);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleUpdateProfile(data) {
        console.log(data)
    }

    return (
        <HomeLayout>
            <div className='w-full'>

                <div className="flex justify-between items-center w-full border-b border-gray-700 py-3">
                    <div className='pl-2'>
                        <span className='text-white text-[20px]'>MY PROFILE</span>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <button type="submit" form='profile-form' className="flex items-center text-white bg-sky-700 hover:bg-sky-800 focus:ring-sky-300 font-medium rounded text-sm px-3 py-1.5 mr-2">
                                <EditIcon /> <span className='ml-2'>Update</span>
                            </button>
                        </div>
                        <div>
                            <button type="button" className="flex items-center text-white bg-sky-700 hover:bg-sky-800 focus:ring-sky-300 font-medium rounded text-sm px-3 py-1.5 mr-2">
                                <ReplayIcon /> <span className='ml-2'>Reload</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full p-2'>
                    <form
                        id="profile-form"
                        className='grid grid-cols-4 grid-rows-5 md:grid-rows-4 gap-2 bg-stone-800 rounded px-3 py-5'
                        onSubmit={handleSubmit(handleUpdateProfile)}
                    >
                        <div className="col-span-4 md:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
                            <input type="text" id="name" className={`bg-stone-800 border ${errors.name ? 'border-red-300' : 'border-gray-300'} outline-none text-white sm:text-sm rounded-lg w-full p-2.5`} {...register('name')} />
                            {errors.name && <span className='text-sm text-red-300'>{errors.name.message}</span>}
                        </div>
                        <div className="col-span-4 md:col-span-2">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
                            <input type="text" id="username" className={`bg-stone-800 border ${errors.username ? 'border-red-300' : 'border-gray-300'} outline-none text-white sm:text-sm rounded-lg w-full p-2.5`} {...register('username')} />
                            {errors.username && <span className='text-sm text-red-300'>{errors.username.message}</span>}
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                            <input type="email" id="email" className={`bg-stone-800 border ${errors.email ? 'border-red-300' : 'border-gray-300'} outline-none text-white sm:text-sm rounded-lg w-full p-2.5`} {...register('email')} />
                            {errors.email && <span className='text-sm text-red-300'>{errors.email.message}</span>}
                        </div>
                        <div className="col-span-4 md:col-span-2">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" id="password" className={`bg-stone-800 border  ${errors.password ? 'border-red-300' : 'border-gray-300'} outline-none text-white sm:text-sm rounded-lg w-full p-2.5`} {...register('password')} />
                            {errors.password && <span className='text-sm text-red-300'>{errors.password.message}</span>}
                        </div>
                        <div className="col-span-4 md:col-span-2">
                            <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-white">Password confirmation</label>
                            <input type="password" id="password_confirmation" className={`bg-stone-800 border ${errors.password_confirmation ? 'border-red-300' : 'border-gray-300'} outline-none text-white sm:text-sm rounded-lg w-full p-2.5`} {...register('password_confirmation')} />
                            {errors.password_confirmation && <span className='text-sm text-red-300'>{errors.password_confirmation.message}</span>}
                        </div>
                        <div className="col-span-4 md:col-span-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Role</label>
                            <input type="email" id="email" className={`bg-stone-800 border border-gray-300 outline-none text-white sm:text-sm rounded-lg w-full p-2.5`} disabled />
                        </div>
                        <div className="col-span-4 md:col-span-1">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Created at</label>
                            <input type="email" id="email" className={`bg-stone-800 border border-gray-300 outline-none text-white sm:text-sm rounded-lg w-full p-2.5`} disabled />
                        </div>
                        <div className="col-span-4 md:col-span-1">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Updated at</label>
                            <input type="email" id="email" className={`bg-stone-800 border border-gray-300 outline-none text-white sm:text-sm rounded-lg w-full p-2.5`} disabled />
                        </div>
                    </form>
                </div>

            </div>
        </HomeLayout >
    )
}

/* Next server side */
/* You should use getServerSideProps only if you need to render a page whose data must be fetched at request time */
/* If the data is fetched from Next Api routes, directly import the logic here - because you are already in server side */
export async function getServerSideProps(context) {

    const controller = new MyProfileController();
    const response = controller.index(10, 1, null);

    return {
        props: {
            data: []
        }
    }
}