import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RaceComponent } from './race/race.component';
import { ChevalComponent } from './cheval/cheval.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inscription", component: SignupComponent },
  { path: "connexion", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "race/:id", component: RaceComponent },
  { path: "cheval/:name", component: ChevalComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
