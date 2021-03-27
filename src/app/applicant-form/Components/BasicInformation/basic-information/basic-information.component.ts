import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/ViewModels/client';


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {
  client:Client;



  constructor( private router: Router) {
    localStorage.clear();
    this.client =new Client('','',new Date(Date.now()),'',0,'','','');
    
   }

  ngOnInit(): void {
  }

  onSubmitForm(form:NgForm){
    this.client.firstName=form.value.firstName;
    this.client.lastName=form.value.lastName;
    this.client.dateOfBirth=form.value.dateOfBirth;
    this.client.gender=form.value.gender;
    this.client.emailAddress=form.value.email;
    this.client.contactNumber=form.value.mobile;
    this.client.nationality=form.value.nationality
    this.client.countryOfResidance=form.value.residence;


   localStorage.setItem("firstName",this.client.firstName)
   localStorage.setItem("lastName",this.client.lastName)
   localStorage.setItem("dateOfBirth", String(this.client.dateOfBirth) )
   localStorage.setItem("gender",this.client.gender)
   localStorage.setItem("email",this.client.emailAddress)
   localStorage.setItem("contactNumber",String(this.client.contactNumber))
   localStorage.setItem("email",this.client.emailAddress)
   localStorage.setItem("nationality",this.client.nationality)
   localStorage.setItem("residance",this.client.countryOfResidance)
   
  
    this.router.navigate(['ClientDetailsForm/QuestionnareForm'])
  }

}
