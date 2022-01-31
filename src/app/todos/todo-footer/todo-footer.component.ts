import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { filtrosValidos } from '../../filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos','pendientes','completados'];

  pendientes: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe( filtro => 
    //   this.filtroActual = filtro);

    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.complete).length;
    });
  }

  cambiarFiltro( filtro: filtrosValidos ) {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }

  borrarCompletados() {
    this.store.dispatch(borrarCompletados());
  }

}
