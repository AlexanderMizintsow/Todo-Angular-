import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['color', 'position', 'title', 'categories', 'priority', 'date', 'status'];
  dataSource = new MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined
  // @ViewChild(MatSort, {static: false}) private sort: MatSort | undefined;

  tasks: Task[] | undefined;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandlerService.tasksSubject.subscribe(tasks => this.tasks = tasks);

    //Создается датасорс для таблицы присваевается любой источник (БД или массивы);
    this.dataSource = new MatTableDataSource(); // ?
    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.addTableObjects();
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


  // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
  private refreshTable() {

    // @ts-ignore
    this.dataSource.data = this.tasks; // обновить источник данных (т.к. данные массива tasks обновились)

    this.addTableObjects();


    // когда получаем новые данные..
    // чтобы можно было сортировать по столбцам "категория" и "приоритет", т.к. там не примитивные типы, а объекты
    // @ts-ignore - показывает ошибку для типа даты, но так работает, т.к. можно возвращать любой тип
    this.dataSource.sortingDataAccessor = (task, colName) => {

      // по каким полям выполнять сортировку для каждого столбца
      switch (colName) {
        case 'priority': {
          return task.priority ? task.priority.id : null;
        }
        case 'categories': {
          return task.category ? task.category.title : null;
        }
        case 'date': {
          return task.date ? task.date : null;
        }

        case 'status': {
          return task.completed ? task.completed : null;
        }

        case 'title': {
          return task.title;
        }
      }
    };

  }

  private addTableObjects() {
    // @ts-ignore
    this.dataSource.sort = this.sort; // компонент для сортировки данных (если необходимо)
    // @ts-ignore
    this.dataSource.paginator = this.paginator; // обновить компонент постраничности (кол-во записей, страниц)
  }

}
