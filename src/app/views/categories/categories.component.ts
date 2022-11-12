import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  selectedCategory: Category | undefined;
  categories: Category[] | undefined;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit() {
    this.dataHandlerService.categotiesSubject.subscribe(categories => this.categories = categories)
  }

  showCategoty(categories: Category) {
      this.selectedCategory = categories;
    this.dataHandlerService.getTodosByCategories(categories);
  }
}
