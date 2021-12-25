import axios from 'axios';

const client = axios.create({ baseURL: 'http:localhost:4000' });

export const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = `Bearer token`;

    const onSuccess = (response) => response;
    const onError = (error) => {
        // Optionaly catch errors and add addional logging here

        return error;
    };

    return client(options).then(onSuccess).catch(onError);
};
