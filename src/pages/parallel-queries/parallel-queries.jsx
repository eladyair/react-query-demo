// 3rd Parties
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
};

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends');
};

const ParallelQueries = () => {
    const {
        isLoading: isHeroesLoading,
        data: superHeroes,
        isError: isHeroesError,
        error: heroesError
    } = useQuery('super-heroes', fetchSuperHeroes);
    const { isLoading: isFriendsLoading, data: friends, isError: isFriendsError, error: friendsError } = useQuery('friends', fetchFriends);

    console.log(friends);

    if (isHeroesLoading || isFriendsLoading) {
        return <h2>Loading...</h2>;
    }

    if (isHeroesError || isFriendsError) {
        return <h2>{heroesError.message || friendsError.message}</h2>;
    }

    return (
        <>
            <h2>Parallel Queries</h2>
            <div className='parallel-queries-wrapper'>
                <div className='super-heros'>
                    {superHeroes.data.map(hero => (
                        <div key={hero.name}>{hero.name}</div>
                    ))}
                </div>
                <div className='friends'>
                    {friends.data.map(friend => (
                        <div key={friend.name}>{friend.name}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ParallelQueries;
