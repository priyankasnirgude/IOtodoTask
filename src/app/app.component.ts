import { Component } from '@angular/core';
import { Itodo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IOtodoTask';
  msgForChild : string = `Work hard, Party Hard!!!`;
  todosArray: Array<Itodo> = [
    {
      todoItem : "javascript"
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    
  }

  ongettingMsg(data:any){
    console.log(data);
  }

  onTodoAdd(todo : HTMLInputElement){
    let todoObj = {
      todoItem : todo.value
    }
    todo.value = ''
    this.todosArray.push(todoObj)
  }

  getTodoItem(data:any){
    console.log(data);
    this.todosArray.push(data)
  }
}

