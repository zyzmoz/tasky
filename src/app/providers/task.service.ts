import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  activeTask : any = null;
  settings: any = {
    defaultDuration: 10,
    unit: 1
  }

  taskList : any[] = [
    {
      title: 'Homework',
      duration: 10,
      active: false
    },
    {
      title: 'Buy Groceries',
      duration: 11,
      active: false
    },
    {
      title: 'Go to the Gym',
      duration: 12,
      active: false
    }
  ];

  constructor() { }

  getActiveTask(){
    return this.activeTask;
  }

  getTaskList(){
    return this.taskList;
  }

  addTask(obj){
    this.taskList.push(obj);
    return this.taskList;
  }

  removeTask(index){
    this.taskList.splice(index,1);
    return this.taskList;
  }

  setTaskActive(index) {
    this.taskList[index].active = true;
    this.activeTask = this.taskList[index];
    console.log(this.activeTask);
    return this.taskList;
  }

  getDurationText(duration){
    let text = '';
    let sec_num = parseInt(duration, 10);
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {
      text += "0"+hours +':';
    } else {
      text += hours +':';
    }
    if (minutes < 10) {
      text += "0"+minutes + ':';
    } else {
      text += minutes +':';
    }
    if (seconds < 10) {
      text += "0"+seconds + '';
    } else {
      text += seconds+'';
    }
    return text;
  }



}
