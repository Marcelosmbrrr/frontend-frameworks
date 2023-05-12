import * as React from 'react';

export default function Dashboard() {
    return (
        <div className='h-full p-2 grid grid-rows-4 md:grid-rows-2 md:grid-cols-3 gap-2'>
            <div className="col-span-3 rounded-md bg-gray-100 shadow-md dark:bg-gray-800">
            </div>
            <div className="col-span-3 md:col-span-1 rounded-md bg-gray-100 shadow-md dark:bg-gray-800">
            </div>
            <div className="col-span-3 md:col-span-1 rounded-md bg-gray-100 shadow-md dark:bg-gray-800">
            </div>
            <div className="col-span-3 md:col-span-1 rounded-md bg-gray-100 shadow-md dark:bg-gray-800">
            </div>
        </div>
    )
}