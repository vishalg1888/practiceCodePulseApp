import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { CategoryService } from '../Services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{

  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private categoryService: CategoryService, private router : Router)
  {
    this.model = {
      name : '',
      urlHandle: ''
    };
  }

  OnFormSubmit(){
    this.addCategorySubscription = this.categoryService.addCategory(this.model)
      .subscribe({
          next:(rsp) => {
            console.log('Success');
            this.router.navigateByUrl('/admin/Categories')
          },
          error: (error) => {
            console.log('Error');
          }
        }
      )
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

}
