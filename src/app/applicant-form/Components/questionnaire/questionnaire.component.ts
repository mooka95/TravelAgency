import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  numberOfForms:number=4
  formNumber:number=1;
  progressbarWidth:number=25;
  toggle :boolean= false;
 listOfReasonsToVistDubai:string[]=[]
 educationLevel:string='';
 everVisitedDubai:boolean;
 haveEverVisitedDubai;
 howLongStayedinDubai:boolean;
 firstName:string=localStorage.getItem("firstName")
 lastName:string=localStorage.getItem("lastName")
 dateOfBirth:string=localStorage.getItem("dateOfBirth");
 email:string=localStorage.getItem("email");
 gender:string=localStorage.getItem("gender")
 contactNumber:string=localStorage.getItem("contactNumber");
 nationality:string=localStorage.getItem("nationality")
 residence:string=localStorage.getItem("residance");


  constructor(private router:Router) { }

  ngOnInit(): void {
   
 
  }
  goToNextForm(){
    if(this.formNumber>=this.numberOfForms){
    this.formNumber=1
    this.progressbarWidth=25
    }
    else{
    this.formNumber++;
    this.progressbarWidth+=25;
    }

  }
  question(question:string,answer:string){
  //  if(question==="visited dubai" && answer=="yes")
  }
 

  chooseActivitesToDoInDubai(activity:string) {
  
    if(!this.listOfReasonsToVistDubai.includes(activity)){
      console.log(activity)
    this.listOfReasonsToVistDubai.push(activity)
  }
  
    this.toggle = !this.toggle;

}
removeActivity(activity:string){
  const index: number = this.listOfReasonsToVistDubai.indexOf(activity);
  if (index !== -1) {
    this.listOfReasonsToVistDubai.splice(index, 1);
}
 
}
chooseYourEducation(education:string){
  this.educationLevel=education;

}
removeEducation(){
  this.educationLevel=''
}
goToBackForm(){
  if(this.formNumber===1){
    this.router.navigate(['ClientDetailsForm'])
  }
  else
  this.formNumber-=1;
  this.progressbarWidth-=25;
  

}

}
