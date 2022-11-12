import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  displayedColumns: string[] = ['color', 'position', 'title', 'categories', 'priority', 'date', 'status'];
  dataSource = new MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }
  tasks: Task[] | undefined;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks);

    //Создается датасорс для таблицы присваевается любой источник (БД или массивы);
    this.dataSource = new MatTableDataSource(); // ?
    this.refreshTable();
  }

  private refreshTable() {
// @ts-ignore
    this.dataSource.data = this.tasks;

  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  // в зависимости от статуса задачи - вернуть цвет названия


  getPriorityColor(task: Task) {
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff';
  }
}
