import * as React from 'react';

export function CardAction(props) {

    console.log(`${props.card_name} action rendered.`);

    function handleChangeCard() {
        props.handleChangeCard();
    }

    return (
        <div className='flex justify-center items-center border-b-2 border-slate-100 px-2 bg-slate-800 text-white'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleChangeCard}>
                Add {props.card_factor}
            </button>
        </div>
    )
}