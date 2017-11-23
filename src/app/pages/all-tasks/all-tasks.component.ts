import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../providers/task.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']

})
export class AllTasksComponent implements OnInit {
  tasks : any[];

  constructor(public _task : TaskService) { }

  ngOnInit() {
    this.tasks = this._task.getTaskList();
  }

  getDurationText = (duration) => this._task.getDurationText(duration);
  setTaskActive(index){
    this.tasks = [];
    this.tasks = this._task.setTaskActive(index);
  }

  removeTask(index) {
    this.tasks = [];
    this.tasks = this._task.removeTask(index);
  }

  addTask(text){
    let obj = {
      title: text.value,
      duration: 0,      
      active: false
    }
    this.tasks = [];
    this.tasks = this._task.addTask(obj);
    text.value = '';
  }

}
