import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onAddFile } from '../../common/helpers/element.helpers';
import { formValidation } from './upload-property.validations';
import { getProvinces, getSaleTypes, getEquipments, addProperty } from './upload-property.api';
import { setOptionList, setCheckboxList, onAddFeature, onRemoveFeature, formatDeleteFeatureButtonId, onAddImage } from './upload-property.helpers';
import { mapPropertyFromVMToApi } from './upload-property.mappers';
import { history } from '../../core/router/history';
import { routes } from '../../core/router/routes';

let property = {
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypes: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [],
    equipmentIds: [],
    images: [],
};

Promise.all([getProvinces(), getSaleTypes(), getEquipments()]).then
(([provincesList, saleTypesList, equipmentsList]) => {
    setOptionList(provincesList.data, 'province');
    setCheckboxList(saleTypesList.data, 'saleTypes');
    setCheckboxList(equipmentsList.data, 'equipments');
});

onUpdateField('title', event => {
    const value = event.target.value;

    property = {
        ...property,
        title: value,
    };

    formValidation.validateField('title', value).then(result => {
        onSetError('title', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;

    property = {
        ...property,
        notes: value,
    };

    formValidation.validateField('notes', value).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;

    property = {
        ...property,
        email: value,
    };

    formValidation.validateField('email', value).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('phone', event => {
    const value = event.target.value;

    property = {
        ...property,
        phone: value,
    };

    formValidation.validateField('phone', value).then(result => {
        onSetError('phone', result);
    });
});

onUpdateField('price', event => {
    const value = event.target.value;

    property = {
        ...property,
        price: value,
    };

    formValidation.validateField('price', value).then(result => {
        onSetError('price', result);
    });
});

onUpdateField('saleTypes', event => {
    const value = event.target.value;
    const checked = event.target.checked;

    (checked) ? property.saleTypes.push(value) : property.saleTypes.splice((property.saleTypes.indexOf(value)), 1);
});

onUpdateField('address', event => {
    const value = event.target.value;

    property = {
        ...property,
        address: value,
    };

    formValidation.validateField('address', value).then(result => {
        onSetError('address', result);
    });
});

onUpdateField('city', event => {
    const value = event.target.value;

    property = {
        ...property,
        city: value,
    };

    formValidation.validateField('city', value).then(result => {
        onSetError('city', result);
    });
});

onUpdateField('province', event => {
    const value = event.target.value;

    property = {
        ...property,
        province: value,
    };

    formValidation.validateField('province', value).then(result => {
        onSetError('province', result);
    });
});

onUpdateField('squareMeter', event => {
    const value = event.target.value;

    property = {
        ...property,
        squareMeter: value,
    };

    formValidation.validateField('squareMeter', value).then(result => {
        onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', event => {
    const value = event.target.value;

    property = {
        ...property,
        rooms: value,
    };

    formValidation.validateField('rooms', value).then(result => {
        onSetError('rooms', result);
    });
});

onUpdateField('bathrooms', event => {
    const value = event.target.value;

    property = {
        ...property,
        bathrooms: value,
    };

    formValidation.validateField('bathrooms', value).then(result => {
        onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', event => {
    const value = event.target.value;

    property = {
        ...property,
        locationUrl: value,
    };

    formValidation.validateField('locationUrl', value).then(result => {
        onSetError('locationUrl', result);
    });
});

onUpdateField('equipments', event => {
    const value = event.target.value;
    const checked = event.target.checked;

    (checked) ? property.equipmentIds.push(value) : property.equipmentIds.splice((property.equipmentIds.indexOf(value)), 1);
});

onSubmitForm('insert-feature-button', () => {
    const featureInput = document.getElementById('newFeature').value;
    console.log();

    if(featureInput) {
        onAddFeature(featureInput);
        property.mainFeatures.push(featureInput);
    }

     onSubmitForm(formatDeleteFeatureButtonId(featureInput), () => {
        onRemoveFeature(featureInput);
        property.mainFeatures.splice(property.mainFeatures.indexOf(featureInput), 1);
    });

    //No le pongo validación a este campo ni al de equipamiento porque no me parece indispensable pero sería la misma validación que he utilizado con el array de SaleTypes
});

onAddFile('add-image', image => {
    onAddImage(image);
    
    property = {
        ...property,
        images: [...property.images, image],
    };
});

onSubmitForm('save-button', () => {
    console.log({ property });
    formValidation.validateForm(property).then(result => {
        onSetFormErrors(result);
        if(result.succeeded) {
            addProperty(mapPropertyFromVMToApi(property));

            history.push(routes.propertyList);
        }
    });
});
