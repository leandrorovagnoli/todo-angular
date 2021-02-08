import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "My first ToDo List in Angular";
  public todos: Todo[] = [];

  constructor() {
    this.todos.push(new Todo(1, 'lavar o carro', false));
    this.todos.push(new Todo(2, 'organizar escritório', true));
    this.todos.push(new Todo(3, 'fazer o treino do saitama', false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.Done = true;
  }

  markAsUndone(todo: Todo) {
    todo.Done = false;
  }
}
