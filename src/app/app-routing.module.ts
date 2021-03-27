import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'ClientDetailsForm',loadChildren: () => import('./applicant-form/applicant-form.module').then(m => m.ApplicantFormModule)},
 {path: '', redirectTo: 'ClientDetailsForm', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
