import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInformationComponent } from './Components/BasicInformation/basic-information/basic-information.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionnaireComponent } from './Components/questionnaire/questionnaire.component';
import { FormsModule } from '@angular/forms';



const routes: Routes=[
  {path:'BasicForm',component:BasicInformationComponent},
  {path:'QuestionnareForm',component: QuestionnaireComponent},
  {path:'',component: BasicInformationComponent},
]

@NgModule({
  declarations: [BasicInformationComponent, QuestionnaireComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSelectCountryModule,
    MatSliderModule,
    NgbModule,
    FormsModule  
  ]
})
export class ApplicantFormModule { }
