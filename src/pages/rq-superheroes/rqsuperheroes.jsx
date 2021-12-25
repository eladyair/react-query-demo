import { Fragment, useState } from 'react';

// 3rd Paties
import { Link } from 'react-location';

// Custom Hooks
import useSuperHeroesData from '../../hooks/useSuperHeroesData';
import useAddSuperHeroData from '../../hooks/useAddSuperHeroData';

const RQSuperHeroes = () => {
    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');

    const onSuccess = data => {
        console.log('Perform a successful (side effect) after fetching', data);
    };

    const onError = error => {
        console.log('Perform an error (side effect) callback after fetching', error);
    };

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

    // console.log({ 'Is Loading': isLoading, 'Is Fetching': isFetching });

    const { mutate } = useAddSuperHeroData();

    const handleAddHero = () => {
        const hero = { name, alterEgo };
        mutate(hero);
    };

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <Fragment>
            <h2>RQ - Super Heroes Page</h2>
            {/* <button onClick={refetch}>Fetch Heroes</button> */}
            <div>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
                <input type='text' value={alterEgo} onChange={e => setAlterEgo(e.target.value)} />
                <button onClick={handleAddHero}>Add Hero</button>
            </div>
            {data?.data.map(hero => (
                <div key={hero.id}>
                    <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}
        </Fragment>
    );
};

export default RQSuperHeroes;
