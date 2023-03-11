import * as React from 'react';
import { usePagination } from '../../context/Pagination';

const initialForm = { title: "", description: "" };
const initialFormError = { title: { error: false, color: "gray" }, description: { error: false, color: "gray" } }

export function TodoList() {

    const { setPage } = usePagination();

    const [form, setForm] = React.useState(initialForm);
    const [list, setList] = React.useState([{ id: 1, title: "Example", description: "This is an example", created_at: new Date().toLocaleString() }]);
    const [formError, setFormError] = React.useState(initialFormError);

    React.useEffect(() => {
        setPage("TodoList");
    }, []);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit() {

        let is_valid = true;
        let formErrorClone = Object.assign({}, formError);
        for (let field in form) {
            if (form[field].length === 0) {
                is_valid = false;
                formErrorClone[field] = { error: true, color: "red" }
            } else if (form[field].length > 0) {
                formErrorClone[field] = { error: false, color: "gray" }
            }
        }

        setFormError(formErrorClone);

        if (!is_valid) {
            return;
        }

        setList((prev) => {
            return [
                ...prev,
                { ...form, ["id"]: (list.length + 1), ["created_at"]: new Date().toLocaleString() }
            ]
        });

        setForm(initialForm);
    }

    function handleReset() {
        setList([]);
        setForm(initialForm);
    }

    const renderList = React.useMemo(() => {
        return (
            list.map((item, index) =>
                <div className="w-full h-10 py-1 rounded-sm flex items-center mb-1 bg-white" key={item.id}>
                    <div className="basis-14 font-medium px-2 border-r-2 ">
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
    }, [list]);

    return (
        <div className='w-full h-full flex flex-col rounded shadow'>

            <div className="w-full h-min p-2">
                <div className='mt-2'>
                    <div className="p-2 flex flex-col">
                        <input
                            type="text"
                            name="title"
                            className={`mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-${formError.title.color}-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                            onChange={handleChange}
                            placeholder="Title"
                            value={form.title}
                        />
                        <span className='text-red-500 text-sm'>{formError.title.error && "Title is necessary"}</span>
                    </div>
                    <div className="p-2 flex flex-col">
                        <input
                            type="text"
                            name="description"
                            className={`mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-${formError.description.color}-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                            onChange={handleChange}
                            placeholder="Description"
                            value={form.description}
                        />
                        <span className='text-red-500 text-sm'>{formError.description.error && "Description is necessary"}</span>
                    </div>
                </div>
                <div className="p-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSubmit}>
                        Add
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>

            <div className="w-full h-full flex flex-col p-1 bg-slate-800 overflow-y-scroll">
                {renderList()}
            </div>

        </div>
    )
}