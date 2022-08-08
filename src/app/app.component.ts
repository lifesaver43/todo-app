import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  myName: string = "Nobody";
  isDisabled: boolean = false;
  todoItem: string = ""
  todoList: {todo: string, isDone: boolean}[] = [];

  getUserName(): string {
    return "Ndi ala";
  }

  goShout(){
    alert("I feel like shouting")
  }

  addToList(){
    if(this.todoItem.trim() != ""){
      this.todoList.push({todo: this.todoItem, isDone: false});
      this.todoItem = "";
    }
  }

  deleteTodoItem(i: number): void{
    this.todoList.splice(i, 1);
  }

  markTodoItem(i: number){
    this.todoList[i].isDone = !this.todoList[i].isDone
    // this.todoList[i].isDone = this.todoList[i].isDone == true ? false : true
  }

  // changeTodo(i: number): void {
  //   const todoInput = document.createElement("input");
  //   this.todoList[i].todo = todoInput
  // }
}

