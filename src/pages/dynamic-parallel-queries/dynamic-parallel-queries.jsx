// 3rd Parties
import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero = heroId => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQueries = () => {
    const heroIds = [1, 3];

    const queryResults = useQueries(
        heroIds.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id)
            };
        })
    );

    console.log({ queryResults });

    return (
        <div>
            <h2>Dynamic Parallel Queries</h2>
        </div>
    );
};

export default DynamicParallelQueries;
