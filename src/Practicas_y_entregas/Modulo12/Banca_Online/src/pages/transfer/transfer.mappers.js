export const mapTransferFromViewModelToApi = transfer => {
    return {
        accountId: transfer.accountId,
        iban: transfer.iban,
        name: transfer.name,
        amount: transfer.amount,
        concept: transfer.concept,
        notes: transfer.notes,
        date: transfer.date,
        id: transfer.id,
    };
};