import { createAction, props } from '@ngrx/store';
import { EntityMap, Comparer } from '@ngrx/entity';
import { Tasks } from '../models/Task.model';

export const clientsLoaded = createAction('[Clients] Clients Loaded', props<{ clients: Tasks[] }>());
export const loadClients = createAction('[Clients] Load CLients', props<{ clients: Tasks[] }>());
export const saveClient = createAction('[Clients] Save Client', props<{ client: Tasks }>());
export const loadClient = createAction('[Clients] Load CLient', props<{ client: Tasks }>());
export const addClients = createAction('[Clients] Add Clients', props<{ clients: Tasks[] }>());
export const addClient = createAction('[Clients] Add Client', props<{ client: Tasks }>());
export const updateClient = createAction('[Clients] Update Client', props<{ client: Tasks }>());
export const clientUpdated = createAction('[Clients] Client Updated', props<{ client: Tasks }>());
export const mapClients = createAction('[Clients] Map Clients', props<{ entityMap: EntityMap<Tasks> }>());
export const deleteClient = createAction('[Clients] Delete Client', props<{ id: string }>());
export const clientDeleted = createAction('[Clients] Client Deleted', props<{ id: string }>());
export const sortClients = createAction('[Clients] Sort CLients', props<{ field: string }>());
