import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/transfers`;

export const insertTransfer = transfer => Axios.post(`${url}`, transfer).then (response => {
    return response.data;
});