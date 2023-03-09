import * as React from 'react';
import { usePagination } from '../../context/Pagination';

export function TodoList() {

    const { setPage } = usePagination();

    React.useEffect(() => {
        setPage("TodoList");
    },[]);

    return (
        <h1>TODO LIST</h1>
    )
}