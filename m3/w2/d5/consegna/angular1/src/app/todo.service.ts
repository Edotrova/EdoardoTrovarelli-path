import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


todoUrl: string = 'http://localhost:3000/todos';



getAllTodos():Promise<Todo[]>{
  return new Promise((resolve, reject) => { 
    setTimeout(() =>{
      
resolve(fetch(this.todoUrl).then((res) => res.json()))
  },2000)
})

}

getTodoById(id:number| undefined):Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(fetch('todoUrl'+id).then((res) => res.json()))
    },2000)
  })
}


addTodo(todo : Todo) : Promise <Todo[]>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{

  let todoCopy = Object.assign({},todo)

  let option = {
    method : 'POST',
    body : JSON.stringify(todoCopy),
    headers : {'content-type': 'application/json'},
  };
  resolve(fetch('http://localhost:3000/todos', option).then((res) => res.json()))
},2000)
})
}


deleteTodo(id:number| undefined):Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      let option = {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      };

      resolve(fetch('http://localhost:3000/todos/'+id, option).then((res) => res.json()))
    },2000)
  })
};


editTodo(todo:Todo, id:number| undefined):Promise<Todo[]> {
  return new Promise((resolve, reject) => {
  setTimeout(() =>{
    let option = {
      method: 'PATCH',
      body: JSON.stringify(todo),
      headers: {
        'content-type': 'application/json',
      },
    };
    resolve(fetch('http://localhost:3000/todos/'+id, option).then((res) => res.json()))
    },2000)
  })
}


}

