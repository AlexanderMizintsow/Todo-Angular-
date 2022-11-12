import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesComponent} from './views/categories/categories.component';
import {FormsModule} from "@angular/forms";
import {TodosComponent} from './views/todos/todos.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

// @NgModule отвечает за запуск Angular контейнера, который управляет приложением;
@NgModule({
  declarations: [ // Декларация компонентов и регистрация их в модуле для использования
    AppComponent,
    CategoriesComponent,
    TodosComponent,
    DashboardComponent
  ],
  imports: [ // Подключается все с окончанием Module;
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
