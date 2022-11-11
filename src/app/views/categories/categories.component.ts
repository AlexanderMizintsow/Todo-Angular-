import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.categories = this.dataHandlerService.getCategories();
    console.log(this.categories);
  }

}
