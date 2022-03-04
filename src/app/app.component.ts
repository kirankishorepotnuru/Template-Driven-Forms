import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormValidations';
  constructor(){}
  

   Submit(employeeForm:any){
    console.log(employeeForm);
    alert("form submitted successfully");
  }
}
