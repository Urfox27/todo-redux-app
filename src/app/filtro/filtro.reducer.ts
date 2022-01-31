import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
import { filtrosValidos } from './filtro.actions';

export const initialState: actions.filtrosValidos = 'todos' as filtrosValidos;

const _filtroReducer = createReducer(initialState,
  
  //  setFiltro Accion
  on(actions.setFiltro, (state, { filtro }) => filtro ),
  
);

export function filtroReducer(state: any, action:any) {
  return _filtroReducer(state, action);
} 