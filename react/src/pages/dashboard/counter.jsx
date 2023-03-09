import * as React from 'react';
import { usePagination } from '../../context/Pagination';

export function Counter() {

    const inputRef = React.useRef(null);

    const { setPage } = usePagination();
    const [factor, setFactor] = React.useState(1);
    const [result, setResult] = React.useState(0);
    const [error, setError] = React.useState({ error: false, color: "gray" });

    React.useEffect(() => {
        setPage("Counter");
    }, []);

    function handleEnter(e) {
        if (e.key === "Enter") {
            if (Number(e.target.value) <= 100 && Number(e.target.value) >= -100) {
                setError(false);
                setFactor(e.target.value);
                inputRef.current.value = "";
            } else if (Number(e.target.value) > 100 || Number(e.target.value) < -100) {
                setError({ error: true, color: "red" });
            }

        }
    }

    function handleReset() {
        setFactor(1);
        setResult(0);
        inputRef.current.value = "";
    }

    return (
        <div className='w-full h-full flex justify-center'>
            <div class="max-w-sm rounded overflow-hidden shadow">
                <div className="w-full h-32 flex justify-center items-center">
                    {result}
                </div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Counter</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 flex justify-center">
                    <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer" onClick={() => setResult((prev) => Number(prev) + Number(factor))} >+ {factor}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer" onClick={() => setResult((prev) => Number(prev) - Number(factor))}>- {factor}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer" onClick={() => setResult((prev) => Number(prev) * Number(factor))}>* {factor}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer" onClick={() => setResult((prev) => Number(prev) ** Number(factor))}>** {factor}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-200 cursor-pointer" onClick={handleReset}>Reset</span>
                </div>
                <div class="px-6 pt-4 pb-2 flex flex-col">
                    <input
                        type="number"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className={`mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-${error.color}-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                        onKeyDown={handleEnter}
                        ref={inputRef}
                        placeholder="Type a number and press Enter"
                    />
                    <span className='text-red-500 text-sm'>{error.error && "Interval available: -100 to 100"}</span>
                </div>
            </div>
        </div>
    )
}