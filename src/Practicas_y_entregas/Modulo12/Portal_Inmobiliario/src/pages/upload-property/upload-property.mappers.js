export const mapPropertyFromVMToApi = property => {
    return {
        title: property.title,
        notes: property.notes,
        email: property.email,
        phone: property.phone,
        price: property.price,
        saleTypeIds: property.saleTypes.sort(),
        address: property.address,
        city: property.city,
        provinceId: property.province,
        squareMeter: property.squareMeter,
        rooms: property.rooms,
        bathrooms: property.bathrooms,
        locationUrl: property.locationUrl,
        mainFeatures: property.mainFeatures,
        equipmentIds: property.equipmentIds.sort(),
        images: property.images,
    };
};