import * as React from 'react';
import { usePagination } from '../../context/Pagination';

export function Memos() {

    const { setPage } = usePagination();

    React.useEffect(() => {
        setPage("Memos");
    },[]);

    return (
        <h1>MEMOS</h1>
    )
}