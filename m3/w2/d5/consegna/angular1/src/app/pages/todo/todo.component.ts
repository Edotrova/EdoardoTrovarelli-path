import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoSvc:TodoService) { }

  ngOnInit(): void {
this.todoSvc.getAllTodos()
.then(res => {
  this.todos = res;
})
  }

}
