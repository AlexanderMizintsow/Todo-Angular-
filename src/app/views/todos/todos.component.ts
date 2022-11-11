import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  tesks: Task[] | undefined;

  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit(): void {
   this.tesks = this.dataHandlerService.getTodos();
   console.log(this.tesks)
  }

}
