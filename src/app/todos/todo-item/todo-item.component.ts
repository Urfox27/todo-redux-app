import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkComplete!: FormControl;
  txtInput!: FormControl;

  editing: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.chkComplete = new FormControl( this.todo.complete );
    this.txtInput = new FormControl( this.todo.text, Validators.required );

    this.chkComplete.valueChanges.subscribe( valor => {
      this.store.dispatch(actions.toggleTodo({id: this.todo.id}))
    });
  }

  editar() {
    this.editing = true;
    this.txtInput.setValue( this.todo.text );
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    },1);
  }

  terminarEdicion() {
    this.editing = false;

    if(this.txtInput.invalid) { return; }
    if(this.txtInput.value === this.todo.text) { return; }

    this.store.dispatch(
      actions.editarTodo({
        id: this.todo.id,
        text: this.txtInput.value
      })
    );
  }

  borrar() {
    this.store.dispatch( actions.borrarTodo({ id: this.todo.id}));
  }

}
