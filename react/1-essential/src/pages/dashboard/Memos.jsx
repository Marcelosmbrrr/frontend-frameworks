import * as React from 'react';
import { usePagination } from '../../context/Pagination';
import { CardA } from '../../components/memos/CardA';
import { CardB } from '../../components/memos/CardB';
import { CardC } from '../../components/memos/CardC';

// A component always enters in the reconciliation algorithm when its states changes
// A parent component, by default, re-render with all its childs, being necessary or not
// So, the hooks memo, useMemo and userCallback exists for avoid unnecessary components re-renders 

// React.memo ===> For props memoization ===> Avoid unnecessary childreen re-render if props not changed
// React.useMemo ===> For functions return memoization ===> Avoid expensive functions calculations on every render if dependencies not changed
// React.useCallback ===> For parent callback memoization ===> Avoid unnecessary function re-render of functions passed to children

export function Memos() {

    const { setPage } = usePagination();
    const [cardA, setCardA] = React.useState({ value: 0, factor: 1 });
    const [cardC, setCardC] = React.useState({ value: 0, factor: 3 });

    const handleChangeCardA = React.useCallback(() => {
        console.log('Card A function rendered.');

        const calculation = Number(cardA.value) + Number(cardA.factor);
        setCardA({ ...cardA, ["value"]: calculation });
    }, [cardA]);

    const handleChangeCardC = React.useCallback(() => {
        console.log('Card C function rendered.');

        const calculation = Number(cardC.value) + Number(cardC.factor);
        setCardC({ ...cardC, ["value"]: calculation });
    }, [cardC]);

    React.useEffect(() => {
        setPage("Memos");
    }, []);

    return (
        <div className='w-full h-full grid grid-cols-none grid-rows-[max-content_1fr] gap-1 rounded-md'>
            <div className='w-ful p-5 shadow'>
                <p className="text-lg text-gray-600 text-justify"><span className='text-sky-400 font-bold'>A component always enters in the reconciliation algorithm when own states changes</span>, and if it has children, they will re-render together even when is unnecessary.
                    This default behaviour can cause performance gaps. To solve this there are hooks that memorize values to avoid unnecessary re-renders.</p>
            </div>
            <div className='grid grid-cols-none grid-rows-[repeat(400px)] lg:grid-cols-3 lg:grid-rows-none gap-1'>
                {/* CARD A */}
                <CardA
                    value={cardA.value}
                    factor={cardA.factor}
                    handleChangeCard={handleChangeCardA}
                />
                {/* CARD B */}
                <CardB />
                {/* CARD C */}
                <CardC
                    value={cardC.value}
                    factor={cardC.factor}
                    handleChangeCard={handleChangeCardC}
                />
            </div>
        </div>
    )
}