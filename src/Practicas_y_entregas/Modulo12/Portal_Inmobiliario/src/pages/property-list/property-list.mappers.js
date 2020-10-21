/*
Property {
    id: string;
    title: string; 
    rooms: string; // 3 habitaciones
    squareMeter: string; // 136m2
    notes: string; // Truncar a 240 chars
    price: string; // 120.000 €
    image: string: 1º image base64
}
*/

export const mapPropertyListFromApiToViewModel = (propertyList) => {
    return propertyList.map(property => mapPropertyFromApiToViewModel(property));
};

const mapPropertyFromApiToViewModel = (property) => {
    return {
        id: property.id,
        title: property.title,
        rooms: (property.room > 1) ? `${property.rooms} habitaciones` : `${property.rooms} habitación`,
        squareMeter: `${property.squareMeter} m2`,
        notes: `${property.notes.slice(0, 240)}...`,
        price: `${property.price.toLocaleString()} €`,
        image: Array.isArray(property.images) ? property.images[0] : '',
    };
};

export const mapFilterToQueryParams = filter => {
    let queryParams = '';
    
    if(filter.saleTypeId) {
        queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`;
        console.log(queryParams);
    }

    if(filter.provinceId) {
        queryParams = `${queryParams}provinceId_like=${filter.provinceId}&`;
    }

    if(filter.minRooms) {
        queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
    }

    if(filter.minBathrooms) {
        queryParams = `${queryParams}bathrooms_gte=${filter.minBathrooms}&`;
    }

    if(filter.minPrice) {
        queryParams = `${queryParams}price_gte=${filter.minPrice}&`;
    }

    if(filter.maxPrice) {
        queryParams = `${queryParams}price_lte=${filter.minPrice}&`;
    }

    return queryParams.slice(0, -1); //Si ponemos el -1 nos coge el último caracter
};