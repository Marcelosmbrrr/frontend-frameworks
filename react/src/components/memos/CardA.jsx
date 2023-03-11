import * as React from 'react';

export const CardA = React.memo((props) => {

    console.log('Card A rendered.');

    function handleChangeCard() {
        props.handleChangeCard();
    }

    return (
        <div className='grid grid-rows-[50px_1fr_85px_50px] shadow'>
            <div className='flex items-center border-b-2 border-slate-100 px-2 bg-slate-800'>
                <span className='text-white font-bold mr-1'>CARD A |</span><span className='text-emerald-400 font-bold'>REACT</span><span className='text-white font-bold'>.memo()</span>
            </div>
            <div className='min-h-[300px] flex justify-center items-center border-b-2 border-slate-100'>
                <h1 className="text-4xl text-sky-400 font-bold">{props.value}</h1>
            </div>
            <div className='text-md text-gray-600 text-justify p-1 shadow'>
                <p className="text-lg text-gray-600 text-justify">Cache component props.</p>
            </div>
            <div className='flex justify-center items-center border-b-2 border-slate-100 px-2 bg-slate-800 text-white'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleChangeCard}>
                    Add {props.factor}
                </button>
            </div>
        </div>
    )
});