import * as React from 'react';
import { usePagination } from '../../context/Pagination';

export function TodoList() {

    const { setPage } = usePagination();

    const [item, setItem] = React.useState({ id: "", title: "", description: "", created_at: "" });
    const [list, setList] = React.useState([{ id: 1, title: "Example", description: "This is an example", created_at: new Date().toLocaleString() }]);
    const [error, setError] = React.useState({ error: false, color: "gray" });

    React.useEffect(() => {
        setPage("TodoList");
    }, []);

    function handleChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    function renderList() {
        return (
            list.map((item, index) =>
                <div className="w-full h-10 py-1 flex items-center mb-1 bg-white">
                    <div className="basis-14 px-2 border-r-2 ">
                        {item.id}
                    </div>
                    <div className="basis-52 px-2 border-r-2">
                        {item.title}
                    </div>
                    <div className="grow px-2 border-r-2">
                        {item.description}
                    </div>
                    <div className="basis-42 px-2">
                        {item.created_at}
                    </div>
                </div>
            )
        )
    }

    return (
        <div className='w-full h-full flex flex-col rounded shadow'>

            <div class="w-full h-min p-2">
                <div className='mt-2'>
                    <div class="p-2 flex flex-col">
                        <input
                            type="text"
                            name="title"
                            className={`mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-${error.color}-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                            onChange={handleChange}
                            placeholder="Title"
                        />
                        <span className='text-red-500 text-sm'>{error.error && "Interval available: -100 to 100"}</span>
                    </div>
                    <div class="p-2 flex flex-col">
                        <input
                            type="text"
                            name="title"
                            className={`mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-${error.color}-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                            onChange={handleChange}
                            placeholder="Title"
                        />
                        <span className='text-red-500 text-sm'>{error.error && "Interval available: -100 to 100"}</span>
                    </div>
                </div>
                <div class="p-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add
                    </button>
                </div>
            </div>

            <div className="w-full h-full flex flex-col p-1 bg-slate-800 overflow-y-scroll">
                {renderList()}
            </div>

        </div>
    )
}