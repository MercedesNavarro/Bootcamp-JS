import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovements = id => {
    return Axios.get(`${url}?accountId=${id}`).then(response => {
        return response.data;
    });
};