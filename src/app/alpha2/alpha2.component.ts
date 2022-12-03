import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


declare function dis(): void;

@Component({
  selector: 'app-alpha2',
  templateUrl: './alpha2.component.html',
  styleUrls: ['./alpha2.component.scss']
})


export class Alpha2Component implements OnInit {
  completed: boolean = false;
  taskList: any[] = []
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })
    
  constructor(
    private formBuilder: FormBuilder
  ) { }
  
  

  addTask() {
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({ id: this.taskList.length, name: value })
    window.localStorage.setItem('task', JSON.stringify(this.taskList))
    this.newTodoForm.reset();
    
  }

  removeTask(i: any) {
    this.taskList.splice(i, 1)
    window.localStorage.setItem('task', JSON.stringify(this.taskList))
    
  }

  markDone(value: any) {
    value.completed = !value.completed
    value.completed === true ?
      this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
      this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
  }
  
  

  ngOnInit(): void {
  }

}
function todoItem(todoItem: any) {
  throw new Error('Function not implemented.');
}