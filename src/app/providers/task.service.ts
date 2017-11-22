import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  activeTask : any = {
    title: 'Buy a Car',
    duration: 10,    
  };

  taskList : any[] = [
    {
      title: 'Homework'
    },
    {
      title: 'Buy Groceries'
    },
    {
      title: 'Go to the Gym'
    }
  ];

  constructor() { }

  getActiveTask(){
    return this.activeTask;
  }



}
