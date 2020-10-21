import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (queryParams) => {
    return Axios.get(`${url}?${queryParams}`).then(response => {
        return response.data;
    });
};

const saleTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypesList = () => {
    return Axios.get(saleTypesUrl).then(response => {
        return response.data;
    });
};

const provincesUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () => {
    return Axios.get(provincesUrl).then(response => {
        return response.data;
    });
};