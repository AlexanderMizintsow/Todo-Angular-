import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {BehaviorSubject, Subject} from "rxjs";

// Обмен данными происходит через service.
// Забираем данные из бека и передаем их во фронт посредством вызова функций во фронет;

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {


// RxJs включает слушателей
  // BehaviorSubject требует первичные полные данные --- BehaviorSubject<Task[]>(TestData.tasks);
  // Subject  - принимает данные без вывода первоначальных;
  // Делает вызовы асинхронными, делает автоматическое обновление на странице;
  // Todo разобрать подробнее (RxJs)!!!
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categotiesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    this.getTodos();
  }

  // getCategories(): Category[] {
  //   return TestData.categories;
  // }

  getTodos() {
    this.tasksSubject.next(TestData.tasks);
  }

  getTodosByCategories(category: Category){
    const tasks = TestData.tasks.filter(data => data.category === category)
    this.tasksSubject.next(tasks);

  }
}
