import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { HomeLayout } from '../../components/layout/HomeLayout';

export default function Products() {

    const [products, setProducts] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const [query, setQuery] = React.useState({ limit: 10, page: 1 });

    return (
        <HomeLayout>
            <div className='w-full'>

                <div class="flex justify-between items-center w-full border-b border-gray-700 py-3">
                    <div className='pl-2'>
                        <span className='text-white text-[20px]'>PRODUCTS</span>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <button type="button" class={`flex items-center text-white ${selected ? "bg-stone-700" : "bg-sky-700 hover:bg-sky-800"} focus:ring-sky-300 font-medium rounded text-sm px-3 py-1.5 mr-2`}>
                                {selected ? <AddIcon /> : <AddIcon />}  <span className='ml-2'>Create</span>
                            </button>
                        </div>
                        <div>
                            <button type="button" class={`flex items-center text-white ${selected ? "bg-sky-700 hover:bg-sky-800" : "bg-stone-700"} focus:ring-sky-300 font-medium rounded text-sm px-3 py-1.5 mr-2`}>
                                {selected ? <EditIcon /> : <EditIcon />} <span className='ml-2'>Edit</span>
                            </button>
                        </div>
                    </div>
                </div>

                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-white uppercase bg-stone-800">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Storage
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created_at
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b bg-stone-900 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4 text-white">
                                Silver
                            </td>
                            <td class="px-6 py-4 text-white">
                                Laptop
                            </td>
                            <td class="px-6 py-4 text-white">
                                Yes
                            </td>
                            <td class="px-6 py-4 text-white">
                                Yes
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </HomeLayout>
    )
}