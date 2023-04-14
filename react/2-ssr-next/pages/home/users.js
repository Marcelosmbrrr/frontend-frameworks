import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { HomeLayout } from '../../components/layout/HomeLayout';
import { CreateUser } from '../../components/formularies/user/CreateUser';
import { UserController } from '../../controllers/modules/user/UserController';

export default function Users(props) {

    const [users, setUsers] = React.useState(props.users);
    const [selected, setSelected] = React.useState(null);
    const [query, setQuery] = React.useState({ limit: 10, page: 1 });

    function handleSelectAll(e) {
        console.log('all')
        console.log(e.target.checked)
    }

    function handleSelect(e) {
        console.log('one')
        console.log(e.target.checked)
    }

    return (
        <HomeLayout>
            <div className='w-full'>

                <div className="flex justify-between items-center w-full border-b border-gray-700 py-3">
                    <div className='pl-2'>
                        <span className='text-white text-[20px]'>USERS</span>
                    </div>
                    <div className='flex items-center pr-2'>
                        <div>
                            {selected ? <AddIcon /> : <CreateUser />}
                        </div>
                        <div>
                            <button type="button" className={`flex items-center text-white ${selected ? "bg-sky-700 hover:bg-sky-800" : "bg-stone-700"} focus:ring-sky-300 font-medium rounded text-sm px-3 py-1.5 mr-2`}>
                                {selected ? <EditIcon /> : <EditIcon />} <span className='ml-2'>Edit</span>
                            </button>
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-white uppercase bg-stone-800">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleSelectAll} />
                                    <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created_at
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 && users.map(() =>
                            <tr className="border-b bg-stone-900 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id={`checkbox-${1}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleSelect} />
                                        <label htmlFor={`checkbox-${1}`} className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4 text-white">
                                    Silver
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Laptop
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Yes
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Yes
                                </td>
                                <td className="px-6 py-4 text-white">
                                    Yes
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </HomeLayout>
    )
}

/* Next server side */
/* You should use getServerSideProps only if you need to render a page whose data must be fetched at request time */
/* If the data is fetched from Next Api routes, directly import the logic here - because you are already in server side */
export async function getServerSideProps(context) {

    const controller = new UserController();
    const response = controller.index(10, 1, null);

    return {
        props: {
            users: []
        }
    }
}