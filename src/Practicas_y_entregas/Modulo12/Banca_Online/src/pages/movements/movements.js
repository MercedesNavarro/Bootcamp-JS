import { history } from '../../core/router';
import { getAccount } from '../../common/api/account.api';
import { getMovements } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListFromApiToViewModel, mapAccountFromApiToViewModel } from './movements.mappers';
import { onSetValues } from '../../common/helpers/element.helpers';

const params = history.getParams();

getMovements(params.id).then(data => {
    addMovementRows(mapMovementsListFromApiToViewModel(data));
});

getAccount(params.id).then(account => { 
    onSetValues(mapAccountFromApiToViewModel(account));
});