import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
// Components
import { SigninComponent } from './components/pages/signin/signin.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { CreateComponent } from './components/shared/formulary/user/create/create.component';
import { UpdateComponent } from './components/shared/formulary/user/update/update.component';
import { HeaderComponent } from './components/shared/layout/header/header.component';
import { ContainerComponent } from './components/shared/layout/container/container.component';
import { DashboardComponent } from './components/pages/home/dashboard/dashboard.component';
import { CalculatorComponent } from './components/pages/home/calculator/calculator.component';
import { TodoListComponent } from './components/pages/home/todo-list/todo-list.component';
import { MyProfileComponent } from './components/pages/home/my-profile/my-profile.component';
import { TableComponent } from './components/pages/home/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    CreateComponent,
    UpdateComponent,
    HeaderComponent,
    ContainerComponent,
    DashboardComponent,
    CalculatorComponent,
    TodoListComponent,
    MyProfileComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
