import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  activeTask : any = null;
  settings: any = {
    defaultDuration: 10,
    unit: "1"
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
    let duration;
    console.log(this.settings.unit);
    switch (this.settings.unit) {
      case "1":
        duration = this.settings.defaultDuration;
        break;
      case "2":
        duration = this.settings.defaultDuration * 60;
        break;
      case "3":
        duration = (this.settings.defaultDuration * 60) * 60;
        break;
      default:
        console.log('NaN');

    }

    obj.duration = duration;
    console.log(obj);
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
    return this.taskList;
  }

  deactiveTask(obj){
    const index = this.taskList.indexOf(obj);
    this.taskList[index].active = false;
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
