import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Features/Category/category-list/category-list.component';
import { AddCategoryComponent } from './Features/Category/add-category/add-category.component';
import { EditCategoryComponent } from './Features/Category/edit-category/edit-category.component';
import { LoginComponent } from './Features/Auth/login/login.component';
import { authGuard } from './Features/Auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'admin/Categories',
    component : CategoryListComponent,
    canActivate : [authGuard]
  },
  {
    path: 'admin/Categories/add',
    component : AddCategoryComponent,
    canActivate : [authGuard]
  },
  {
    path: 'admin/Categories/:id',
    component : EditCategoryComponent,
    canActivate : [authGuard]
  },
  {
    path: 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
