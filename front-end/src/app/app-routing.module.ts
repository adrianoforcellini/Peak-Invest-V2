import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationComponent } from './Pages/calculation/calculation.component';
import { HomeComponent } from './Pages/home/home.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userslist', component: UsersListComponent },
  { path: 'calculation', component: CalculationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
