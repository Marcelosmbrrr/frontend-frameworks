import * as React from 'react';
import { HomeLayout } from '../../components/layout/HomeLayout';
import { HorizontalChart } from '../../components/charts/HorizontalChart';
import { DashboardController } from '../../controllers/modules/dashboard/DashboardController';

export default function Dashboard(props) {

    const [data, setData] = React.useState(props.data);

    return (
        <HomeLayout>
            <div className='w-full p-2 grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2  gap-2'>
                <div className='bg-stone-800 col-span-2 flex flex-col rounded px-3 py-5'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-2xl text-white'>2.300</span>
                            </div>
                            <div>
                                <span className='text-stone-500 text-sm'>Description</span>
                            </div>
                        </div>
                        <div>
                            <span className='text-1xl text-green-400'>10%</span>
                        </div>
                    </div>
                    <div className='py-2 w-full h-[180px]'>
                        <HorizontalChart />
                    </div>
                </div>
                <div className='bg-stone-800 col-span-2 md:col-span-1 flex flex-col rounded px-3 py-5'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-2xl text-white'>800</span>
                            </div>
                            <div>
                                <span className='text-stone-500 text-sm'>Description</span>
                            </div>
                        </div>
                        <div>
                            <span className='text-1xl text-green-400'>10%</span>
                        </div>
                    </div>
                    <div className='py-2 w-full h-[180px]'>
                        <HorizontalChart />
                    </div>
                </div>
                <div className='bg-stone-800 col-span-2 md:col-span-1 flex flex-col rounded px-3 py-5'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-2xl text-white'>189</span>
                            </div>
                            <div>
                                <span className='text-stone-500 text-sm'>Description</span>
                            </div>
                        </div>
                        <div>
                            <span className='text-1xl text-green-400'>10%</span>
                        </div>
                    </div>
                    <div className='py-2 w-full h-[180px]'>
                        <HorizontalChart />
                    </div>
                </div>
                <div className='bg-stone-800 col-span-2 flex flex-col rounded px-3 py-5'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-2xl text-white'>1.560</span>
                            </div>
                            <div>
                                <span className='text-stone-500 text-sm'>Description</span>
                            </div>
                        </div>
                        <div>
                            <span className='text-1xl text-green-400'>10%</span>
                        </div>
                    </div>
                    <div className='py-2 w-full h-[180px]'>
                        <HorizontalChart />
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

/* Next server side */
/* You should use getServerSideProps only if you need to render a page whose data must be fetched at request time */
/* If the data is fetched from Next Api routes, directly import the logic here - because you are already in server side */
export async function getServerSideProps(context) {

    const controller = new DashboardController();
    const response = controller.index(10, 1, null);

    return {
        props: {
            data: []
        }
    }
}