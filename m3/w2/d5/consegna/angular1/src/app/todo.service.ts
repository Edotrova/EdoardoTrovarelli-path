import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

todoUrl: string = 'http://localhost:3000/todo';

todoArray:Todo[] = []

getAllTodos():Promise<Todo[]>{
return new Promise<Todo[]>((resolve, reject) => {

  setTimeout(() =>{
 resolve(fetch(this.todoUrl).then(res => res.json()));
  },2000)
})

}






}

