import * as React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { HomeLayout } from '../../components/layout/HomeLayout';

export default function MyProfile() {
    return (
        <HomeLayout>
            <div className='w-full'>

                <div class="flex justify-between items-center w-full border-b border-gray-700 py-3">
                    <div className='pl-2'>
                        <span className='text-white text-[20px]'>MY PROFILE</span>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <button type="button" class="flex items-center text-white bg-sky-700 hover:bg-sky-800 focus:ring-sky-300 font-medium rounded text-sm px-3 py-1.5 mr-2">
                                <ReplayIcon /> <span className='ml-2'>Reload</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full p-2'>
                    <div className='bg-stone-800 rounded px-3 py-5'>
                    </div>
                </div>

            </div>
        </HomeLayout >
    )
}

export async function getStaticProps(context) {
    return {
        props: {},
    }
}