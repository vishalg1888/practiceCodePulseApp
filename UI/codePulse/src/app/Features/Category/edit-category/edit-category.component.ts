import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { Category } from '../Models/category.model';
import { UpdateCategoryRequest } from '../Models/update-category-request-model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy{

  id : string | null = null; //to define default value
  paramSubscription? : Subscription;
  category? : Category;
  editCategorySubscription? : Subscription;

  constructor(private route : ActivatedRoute, private categoryService : CategoryService, private router : Router){}

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next : (params) => {
        this.id  = params.get('id'); //to get Id from query param

        if(this.id)
        {
           // get category data from api based on ths Id
           this.categoryService.getCategoryById(this.id)
           .subscribe({
            next : (response) => {
              this.category = response;
            }
           })
        }
      }
    })
  }

  OnFormSubmit() : void {
    const updateCategotyRequest: UpdateCategoryRequest = {
        name: this.category?.name ?? '',
        urlHandle : this.category?.urlHandle ?? ''
    }

    if(this.id){
    this.editCategorySubscription = this.categoryService.updateCategory(this.id, updateCategotyRequest)
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
  }


  OnDelete() : void{
    if(this.id){
    this.categoryService.deleteCategory(this.id)
    .subscribe({
      next: (rsp) => {
        this,this.router.navigateByUrl('/admin/Categories')
      }
    })
    }
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.editCategorySubscription?.unsubscribe();
  }


}
