// 3rd Parties
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = email => {
    return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = channelId => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueries = () => {
    const email = 'elad@example.com';
    const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email));
    const channelId = user?.data.channelId;

    const { data: channel } = useQuery(['channel', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    });
    const courses = channel?.data.courses;

    console.log(courses);

    return (
        <div>
            <h2>Dependent Queries</h2>
        </div>
    );
};

export default DependentQueries;
