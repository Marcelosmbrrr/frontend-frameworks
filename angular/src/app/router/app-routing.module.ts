import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { SigninComponent } from '../components/pages/signin/signin.component';
import { SignupComponent } from '../components/pages/signup/signup.component';
import { ContainerComponent } from '../components/shared/layout/container/container.component';
import { DashboardComponent } from '../components/pages/home/dashboard/dashboard.component';
import { CalculatorComponent } from '../components/pages/home/calculator/calculator.component';
import { TodoListComponent } from '../components/pages/home/todo-list/todo-list.component';
import { TableComponent } from '../components/pages/home/table/table.component';
import { MyProfileComponent } from '../components/pages/home/my-profile/my-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home', component: ContainerComponent, children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'calculator', component: CalculatorComponent, pathMatch: 'full' },
      { path: 'todo-list', component: TodoListComponent, pathMatch: 'full' },
      { path: 'table', component: TableComponent, pathMatch: 'full' },
      { path: 'my-profile', component: MyProfileComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
