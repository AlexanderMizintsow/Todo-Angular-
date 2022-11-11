import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  tasks: Task[] | undefined;

  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit()  {
   this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks)
  }

}
