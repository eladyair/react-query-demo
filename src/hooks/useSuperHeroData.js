// 3rd Parties
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

// useQuery behind the scene passes on object from whice we can extract the field "queryKey" that is value is an array of params.
const fetchSuperHero = ({ queryKey }) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperHeroData = heroId => {
    const queryClient = useQueryClient();

    return useQuery(['super-hero', heroId], fetchSuperHero, {
        initialData: () => {
            const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero => hero.id === +heroId);

            if (hero) {
                return {
                    data: hero
                };
            } else {
                return undefined;
            }
        }
    });
};

export default useSuperHeroData;
