import * as React from 'react';
import { usePagination } from '../../context/Pagination';

export function Dashboard() {

    const { setPage } = usePagination();

    React.useEffect(() => {
        setPage("Dashboard");
    }, []);

    return (
        <div className='w-full h-full'>

        </div>
    )
}