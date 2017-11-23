import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../providers/task.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public _task : TaskService) { }

  ngOnInit() {
  }

  saveSettings(duration, unit){
    this._task.settings.defaultDuration = duration;
    this._task.settings.unit = unit;
    console.log(this._task.settings);
  }

}
