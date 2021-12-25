import { useState } from 'react';

// 3rd Parties
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchColors = pageNumber => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueries = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { isLoading, isError, error, data } = useQuery(['colors', pageNumber], () => fetchColors(pageNumber), {
        keepPreviousData: true
    });

    const handlePrev = () => {
        setPageNumber(prevPageNumber => prevPageNumber - 1);
    };

    const handleNext = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    };

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <>
            <h2>Paginated Queries</h2>
            <div>
                {data?.data.map(color => (
                    <div key={color.id}>
                        <h2>
                            {color.id}. {color.label}
                        </h2>
                    </div>
                ))}
            </div>
            <div className='ctas'>
                <button onClick={handlePrev} disabled={pageNumber === 1}>
                    Prev
                </button>
                <button onClick={handleNext} disabled={pageNumber === 4}>
                    Next
                </button>
            </div>
        </>
    );
};

export default PaginatedQueries;
