import { history, back } from '../../core/router';
import { getAccountList } from '../account-list/account-list.api';
import { setAccountOptions } from './transfer.helpers';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers/element.helpers';
import { formValidation, isValidDate } from './transfer.validations';
import { mapTransferFromViewModelToApi } from './transfer.mappers';
import { insertTransfer } from './transfer.api';

const params = history.getParams();

getAccountList(params.id).then(data => {
    setAccountOptions(data, params.id);
});

let transfer = {
    accountId: params.id,
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    day: '',
    month: '',
    year: '',
    date: '',
    email: '', //Tanto el objeto DATE como la propiedad EMAIL no se enviarán al servidor
};

onUpdateField('select-account', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        accountId: value,
    }; // No incluyo validación porque siempre sale una cuenta por defecto. Nunca va a quedar vacía. No hace falta ponerla en requerida
});

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        iban: value,
    };

    formValidation.validateField('iban', value).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        name: value,
    };

    formValidation.validateField('name', value).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', event => {
    const value = Number(event.target.value);
    transfer = {
        ...transfer,
        amount: value,
    };

    formValidation.validateField('amount', value).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        concept: value,
    };

    formValidation.validateField('concept', value).then(result => {
        onSetError('concept', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        notes: value,
    };
});

onUpdateField('day', event => {
    const value = Number(event.target.value);
    transfer.day = value;
    transfer.date = `${transfer.year}-${transfer.month}-${transfer.day}`;

    formValidation.validateField('day', value).then(result => {
        onSetError('date', result);
    });
});

onUpdateField('month', event => {
    const value = Number(event.target.value);
    transfer.month = value; // Las fechas comienzan los meses por el 0 -> Enero
    transfer.date = `${transfer.year}-${transfer.month}-${transfer.day}`;

    formValidation.validateField('month', value).then(result => {
        onSetError('date', result);
    });
});

onUpdateField('year', event => {
    const value = Number(event.target.value);
    transfer.year = value;
    transfer.date = `${transfer.year}-${transfer.month}-${transfer.day}`;

    formValidation.validateField('year', value).then(result => {
        onSetError('date', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        email: value,
    };

    formValidation.validateField('email', value).then(result => {
        onSetError('email', result);
    });
});

onSubmitForm('transfer-button', () => {
    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);

        if (result.succeeded) {
            insertTransfer(mapTransferFromViewModelToApi(transfer));
            history.back();
        }
    });
});