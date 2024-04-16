import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCLient from '../reducers/Task.reducer';
import { Tasks } from '../models/Task.model';

export const selectClientsState = createFeatureSelector<fromCLient.State>('clients');

const emptyClient: Tasks = {
    _id: '',
    name: '',
    code: 0,
    address: '',
    telephone: '',
    status: '',
    birthDate: undefined,
    __v: ''
}

export const selectAllClients = createSelector(selectClientsState, fromCLient.selectAllClients);
export const selectClientId = createSelector(selectClientsState, fromCLient.getSelectedClientId);
export const selectClientEntities = createSelector(selectClientsState, fromCLient.selectClientEntities);
export const selectCurrentClient = createSelector(
    selectClientEntities,
    selectClientId,
    (clientEntities, clientId) => clientId ? clientEntities[clientId] : emptyClient
);

export const selectSortedClients = createSelector(
    selectClientsState,
    selectAllClients,
    (state, clients) =>  clients.sort((a, b) =>
        a[state.sorterField] === b[state.sorterField] ? 0 :
            (a[state.sorterField] > b[state.sorterField] ? 1 * state.sorterMutipliier : -1 * state.sorterMutipliier)
    )
);
