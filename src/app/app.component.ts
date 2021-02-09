import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "My first ToDo List in Angular";
  public todos: Todo[] = [];
  public form: FormGroup
  public mode: String = 'list';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    })

    this.load();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.save();
    }
  }

  markAsDone(todo: Todo) {
    todo.Done = true;
    this.save();
  }

  markAsUndone(todo: Todo) {
    todo.Done = false;
    this.save();
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
    this.changeMode('list');
  }

  clear() {
    this.form.reset();
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  load() {
    const data = localStorage.getItem("todos");

    if (data != null)
      this.todos = JSON.parse(data);
  }

  changeMode(mode: string) {
    this.mode = mode;
  }
}
