const getEquipmentsNames = (list, equipmentsIds) => {
    const equipmentsNames = equipmentsIds.map(equipment => {
        return list[equipment - 1].name;
    });
    return equipmentsNames;
};

export const mapPropertyDetailFromApiToVM = (property, equipmentsList) => {
    return {
        mainImage: Array.isArray(property.images) ? property.images[0] : '',
        title: property.title,
        price: `${property.price.toLocaleString()} €`,
        city: property.city,
        rooms: (property.rooms > 1) ? `${property.rooms} habitaciones` : `${property.rooms} habitación`,
        squareMeter: `${property.squareMeter} m2`,
        bathrooms: (property.bathrooms > 1) ? `${property.bathrooms} baños`: `${property.bathrooms} baño`,
        notes: property.notes,
        mainFeatures: property.mainFeatures,
        equipments: getEquipmentsNames(equipmentsList, property.equipmentIds),
        locationUrl: property.locationUrl,
        address: property.address,
        images: property.images,
    };
};