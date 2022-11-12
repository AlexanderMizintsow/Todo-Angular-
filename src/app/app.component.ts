import { Component } from '@angular/core';

@Component({
  selector: 'app-root',    // Как будет записан компонент в виде тега <app-root><app-root/>;
  templateUrl: './app.component.html', // Путь к ресурсу компонента на HTML;
  styleUrls: ['./app.component.scss'] // Путь к ресурсу компонента на CSS;
})
export class AppComponent {       // Логика самого компонента, методы, функции, переменные.
  title = 'Todo';
}
