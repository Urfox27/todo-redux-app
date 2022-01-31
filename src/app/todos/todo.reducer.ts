import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';

import * as actions from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Utilizar repo Vue Maps'),
    new Todo('Ir a la oficina a las 3:00 pm'),
    new Todo('Realizar curso de React'),
    new Todo('Jugar PUBG con los panas'),
];

const _todoReducer = createReducer(initialState,

  //  crearTodo Accion
  on(actions.crearTodo, (state, { text }) => [...state, new Todo( text )] ),
  
  //  toggleTodo Accion
  on(actions.toggleTodo, (state, { id }) => {
    return state.map( todo => {
      if( todo.id === id){
        return {
          ...todo,
          complete: !todo.complete
        }
      }else{
        return todo;
      }
    });
  }),

  //  editarTodo Accion
  on(actions.editarTodo, (state, { id, text }) => {
    return state.map( todo => {
      if( todo.id === id){
        return {
          ...todo,
          text: text
        }
      }else{
        return todo;
      }
    });
  }),

  //  editarTodo Accion
  on(actions.borrarTodo, (state, { id }) => state.filter( todo => todo.id !== id) ),

  //  toggleTodo Accion
  on(actions.toggleAll, (state, { completado }) => {
    return state.map( todo => {
        return {
          ...todo,
          complete: completado
        }
    });
  }),
  
  //  borrarCompletados Accion
  on(actions.borrarCompletados, state => state.filter( todo => !todo.complete)),
  
);

export function todoReducer(state: any, action:any) {
  return _todoReducer(state, action);
} 