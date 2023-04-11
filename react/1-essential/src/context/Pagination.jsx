

import * as React from 'react';

export const PaginationContext = React.createContext("");

export function PaginationProvider({ children }) {

    const [page, setPage] = React.useState("");

    return (
        <PaginationContext.Provider value={{ page, setPage }}>
            {children}
        </PaginationContext.Provider>
    )

}

// Hook
export function usePagination() {
    return React.useContext(PaginationContext);
}

