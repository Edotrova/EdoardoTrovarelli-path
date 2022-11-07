import { ThisReceiver } from '@angular/compiler';
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
  newTodo:Todo = new Todo('', false)


  constructor(private todoSvc: TodoService) { }

  ngOnInit(): void {
    
    this.todoSvc.getAllTodos()
    .then(res => {
      this.todos = res.filter(todo => todo.completed === false)
    })


  }

  show():void{
    this.todoSvc.getAllTodos().then(res => {
      this.todos = res
      
    });
  }

  adding():void{
    this.todoSvc.addTodo(this.newTodo)
    this.newTodo = new Todo('', false)
    setTimeout(() => {
      this.todoSvc.getAllTodos()
      .then(res => {
        this.todos = res.filter(todo => todo.completed === false)
      });
    },500)

  }

  deleted(id:number | undefined){
    this.todoSvc.deleteTodo(id)
    setTimeout(() => {
      this.todoSvc.getAllTodos()
      .then(res => {
        this.todos = res.filter(todo => todo.completed === false)
      });
    },500)
}

update(todo:Todo, id:number | undefined){
  this.todoSvc.editTodo(todo,todo.id)
  setTimeout(() => {
    this.todoSvc.getAllTodos()
      .then(res => {
        this.todos = res.filter(todo => todo.completed === false)
      });
  },500)
}


reverseBoolean(todo:Todo){

  todo.completed = !todo.completed;
  this.todoSvc.editTodo(todo,todo.id)
  setTimeout(() => {
    this.todoSvc.getAllTodos()
    .then(res => {
      this.todos = res.filter(todo => todo.completed === false);
    
});
},2000)

}

}
