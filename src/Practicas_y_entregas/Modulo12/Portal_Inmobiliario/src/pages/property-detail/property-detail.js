import { history } from '../../core/router/history';
import { getPropertyDetail, getEquipmentsList, addNewContact } from './property-detail.api';
import { mapPropertyDetailFromApiToVM } from './property-detail.mappers';
import { setPropertyValues } from './property-detail.helpers';
import { onSetError, onSubmitForm, onUpdateField, onSetFormErrors, onSetValues } from '../../common/helpers/element.helpers';
import { formValidation } from './property-detail.validators';

const params = history.getParams();

Promise.all([
    getPropertyDetail(params.id), 
    getEquipmentsList()
]).then(([data, list]) => {

    setPropertyValues(mapPropertyDetailFromApiToVM(data, list));
});

let contact = {
    propertyId: params.id,
    email: '',
    message: '',
};

onUpdateField('email', event => {
    const value = event.target.value;

    contact = {
        ...contact,
        email: value,
    };
    formValidation.validateField('email', value).then(result => {
        onSetError('email', result);
    });

});

onUpdateField('message', event => {
    const value = event.target.value;

    contact = {
        ...contact,
        message: value,
    };
    formValidation.validateField('message', value).then(result => {
        onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
    formValidation.validateForm(contact).then(result => {
        onSetFormErrors(result);

        if(result.succeeded) {
            addNewContact(contact);
            contact = {
                propertyId: params.id,
                email: '',
                message: ''
            };
            onSetValues(contact);
        }
    });
});