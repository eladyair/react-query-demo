// 3rd Parties
import { useMutation, useQueryClient } from 'react-query';
// import axios from 'axios';

// Utils
import { request } from '../utils/axios-utils';

const saveSuperHero = (hero) => {
    // return axios.post('http://localhost:4000/superheroes', hero);

    return request({ url: '/superheroes', method: 'post', data: hero });
};

const useAddSuperHeroData = () => {
    const queryClient = useQueryClient();

    return useMutation(saveSuperHero, {
        // // Create addional network request for fetching updated data after updating the db
        // onSuccess: () => {
        //     queryClient.invalidateQueries('super-heroes');
        // }
        // // Using the response mutation (new added data) to update the current data
        // onSuccess: data => {
        //     queryClient.setQueriesData('super-heroes', oldQueryData => {
        //         return {
        //             ...oldQueryData,
        //             data: [...oldQueryData.data, data.data]
        //         };
        //     });
        // }
        // // Optimistic updates
        // onMutate is called before the actual mutation fired and it receievs the same data
        onMutate: async (newHero) => {
            // 1. Cancel any outgoing refetches so they won't override our optimistic update
            await queryClient.cancelQueries('super-heroes');
            // 2. Getting hold of the current query data before we make any update, this would help in case we'll need to rollback
            const previousHeroData = queryClient.getQueryData('super-heroes');
            queryClient.setQueriesData('super-heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, { id: oldQueryData?.data?.length + 1, ...newHero }]
                };
            });

            return {
                previousHeroData
            };
        },
        // If the mutation encounters an error, this event fires (performing a rollback)
        onError: (_error, _hero, context) => {
            // 3. In case an error occured, we access through context the data returned by onMutate and set it as the query data
            queryClient.setQueryData('super-heroes', context.previousHeroData);
        },
        // If the mutation was successful or when it encounters an error
        onSettled: () => {
            // Refetching the data, this will insure that the client state is insync with the server state
            queryClient.invalidateQueries('super-heroes');
        }
    });
};

export default useAddSuperHeroData;
