import { getPropertyList, getSaleTypesList, getProvincesList } from './property-list.api';
import { mapPropertyListFromApiToViewModel, mapFilterToQueryParams } from './property-list.mappers';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers/element.helpers';

Promise.all([
    getPropertyList(),
    getSaleTypesList(),
    getProvincesList(),
]).then(([ propertyList, saleTypeList, provinceList ]) => { //Destructuring para aplicar una constante a cada elemento del array de resultado
    // const [ propertyList, saleTypeList, provinceList ] = resultList;

    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
});

const loadPropertyList = propertyList => {
    const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
    addPropertyRows(viewModelPropertyList);
};

let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathrooms: '',
    minPrice: '',
    maxPrice: '',
};

const filterId = {
    saleTypeId: 'select-sale-type',
    provinceId: 'select-province',
    minRooms: 'select-room',
    minBathrooms: 'select-bathroom',
    minPrice: 'select-min-price',
    maxPrice: 'select-max-price',
};

for (const select in filterId) {
    onUpdateField(filterId[select], event => {
        const value = event.target.value;
        filter = {
            ...filter,
            [select]: value,
        }; 
    });
}

onSubmitForm('search-button', () => {
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    getPropertyList(queryParams).then(propertyList => {
        loadPropertyList(propertyList);
    });
    console.log({ filter });
}); 