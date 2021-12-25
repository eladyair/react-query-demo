// 3rd Parties
import { useQuery } from 'react-query';
// import axios from 'axios';

// Utils
import { request } from '../utils/axios-utils';

const fetchSuperHeroes = () => {
    // return axios.get('http://localhost:4000/superheroes');

    return request({ url: '/superheroes' });
};

const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        onSuccess,
        onError
        // select: data => {
        //     const names = data.data.map(hero => hero.name);
        //     return names;
        // }
    });
};

export default useSuperHeroesData;
