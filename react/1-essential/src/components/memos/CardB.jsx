import * as React from 'react';

export const CardB = React.memo((props) => {

    console.log('Card B rendered.');

    const [cardB] = React.useState(5); // a list that never changes
    const [reRender, setReRender] = React.useState(false); // a boolean that changes to cause re render 

    // Without useMemo when card re render the "renderList" function will render again too 
    // With useMemo the "renderList" function will be cached and never rendered again in this example (because cardB never changes)
    const cachedList = React.useMemo(renderList, [cardB]);

    function renderList() {
        console.log('Card B function rendered.');

        return Array(cardB).map((value, i) =>
            <div className='w-full h-10 bg-slate-100 shadow' key={value}>
                {value}
            </div>
        );
    }

    function handleReRender() {
        setReRender(prev => !prev);
    }

    return (
        <div className='grid grid-rows-[50px_1fr_85px_50px] shadow'>
            <div className='flex items-center border-b-2 border-slate-100 px-2 bg-slate-800'>
                <span className='text-white font-bold mr-1'>CARD B |</span><span className='text-emerald-400 font-bold'>REACT</span><span className='text-white font-bold'>.useMemo()</span>
            </div>
            <div className='min-h-[300px] flex flex-cols border-b-2 border-slate-100'>
                {cachedList}
            </div>
            <div className='text-md text-gray-600 text-justify p-1 shadow'>
                <p className="text-lg text-gray-600 text-justify">Cache component function if dependencies not changed.</p>
            </div>
            <div className='flex justify-center items-center border-b-2 border-slate-100 px-2 bg-slate-800 text-white'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReRender}>
                    Re Render Card
                </button>
            </div>
        </div>
    )
});