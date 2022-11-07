import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  todos: Todo[] = [];
  newTodo:Todo = new Todo('', false)

  constructor(private todoSvc: TodoService) { }

  ngOnInit(): void {

    this.todoSvc.getAllTodos()
    .then(res => {
      this.todos = res.filter(todo => todo.completed === true)
    })
      
    }
  }
 

  

  


