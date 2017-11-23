import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from '../../providers/task.service';
import { Observable } from  'rxjs/Rx';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.css']
})
export class ActiveTasksComponent implements OnInit {
  activeTask: any = null;
  timer: String;
  elapsed: number = 0;
  clock : any = null;
  constructor(private _task : TaskService) {

  }

  ngOnInit() {
    this.activeTask = this._task.getActiveTask();
    if (this.activeTask)
      this.setTimer(0);
    this.clock = Observable.timer(1000,1000);
  }

  startTimer(){
    this.setTimer(0);
    this.activeTask.done = false;
    console.log('start timer');
    let subs = this.clock.subscribe(t => {
      this.setTimer(1);
      if (this.elapsed === this.activeTask.duration){
        this.elapsed = 0;
        this.activeTask.done = true;
        subs.unsubscribe();
      }
    });
  }

  deactiveTask() {
    this.activeTask = null;
  }

  setTimer(n: number){
    let { duration } = this.activeTask;
    this.elapsed += n;
    duration = duration - this.elapsed;
    console.log(duration);
    let sec_num = parseInt(duration, 10);
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    this.timer = '';
    if (hours   < 10) {
      this.timer += "0"+hours +':';
    } else {
      this.timer += hours +':';
    }
    if (minutes < 10) {
      this.timer += "0"+minutes + ':';
    } else {
      this.timer += minutes +':';
    }
    if (seconds < 10) {
      this.timer += "0"+seconds + '';
    } else {
      this.timer += seconds+'';
    }
  }

}
