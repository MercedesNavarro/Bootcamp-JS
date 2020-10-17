export const mapAccountFromApiToViewModel = account => {
    return {
        ...account,
        alias: account.name,
    };
};

export const MapAccountFromViewModelToApi = account => {
    return{
        ...account,
        name: account.alias,
    };
};