import * as React from 'react';

export function CardMonitor(props) {

    console.log(`${props.card_name} monitor rendered.`);

    return (
        <div className='min-h-[300px] flex justify-center items-center border-b-2 border-slate-100'>
            <h1 className="text-4xl text-sky-400 font-bold">{props.card_value}</h1>
        </div>
    )
}