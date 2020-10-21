import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/provinces`;

export const getProvinces = () => {
    return Axios.get(url).then(response => {
        return response;
    });
};

let saleTypesUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypes = (param) => {
    if(param !== undefined) saleTypesUrl = `${process.env.BASE_API_URL}/saleTypes?id=${param}`;

    return Axios.get(saleTypesUrl).then(response => {
        return response;
    });
};

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () => {
    return Axios.get(equipmentsUrl).then(response => {
        return response;
    });
};

const propertiesUrl = `${process.env.BASE_API_URL}/properties`;

export const addProperty = property => Axios.post(propertiesUrl, property).then(response => {
    return response;
});