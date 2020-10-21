import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = id => {
    return Axios.get(`${url}?id=${id}`).then(response => {
        return response.data[0]; //Será un array con un único elemento
    });
};

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () => {
    return Axios.get(`${equipmentsUrl}`).then(response => {
        return response.data;
    });
};

const contactsUrl = `${process.env.BASE_API_URL}/contact`;

export const addNewContact = contact => Axios.post(contactsUrl, contact).then(response => {
    console.log(contact);
    return response.data;
});