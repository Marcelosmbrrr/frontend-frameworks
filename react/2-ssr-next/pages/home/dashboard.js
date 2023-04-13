import * as React from 'react';
import { HomeLayout } from '../../components/layout/HomeLayout';
import { HorizontalChart } from '../../components/charts/HorizontalChart';

export default function Dashboard() {
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

export async function getStaticProps(context) {
    return {
        props: {}, 
    }
}