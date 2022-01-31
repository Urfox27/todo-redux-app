import { createAction, props } from '@ngrx/store';

// Crear accion crearTodo
export const crearTodo = createAction(
    '[TODO] CrearTodo',
    props<{ text: string}>()
);

// Crear accion toggleTodo
export const toggleTodo = createAction(
    '[TODO] ToggleTodo',
    props<{ id: number}>()
);

// Crear accion editarTodo
export const editarTodo = createAction(
    '[TODO] EditarTodo',
    props<{ id: number, text: string }>()
);

// Crear accion editarTodo
export const borrarTodo = createAction(
    '[TODO] BorrarTodo',
    props<{ id: number }>()
);

// Crear accion toggleAll
export const toggleAll = createAction(
    '[TODO] ToggleAllTodo',
    props<{ completado: boolean }>()
);

// Crear accion toggleAll
export const borrarCompletados = createAction(
    '[TODO] borrarCompletadosTodo'
);
