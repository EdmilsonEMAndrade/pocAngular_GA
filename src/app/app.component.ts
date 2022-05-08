import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { User } from './classes/user';
import { IUserData } from './interface/IUserData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userForm!: FormGroup;

  constructor(
    private gaService: GoogleAnalyticsService
  ){}
  title = 'analytics_poc';
  ngOnInit(): void {
    this.createForm(new User());
  }
  
  createForm(user:IUserData){
    this.userForm = new FormGroup({
      nome: new FormControl(user.nome),
      email: new FormControl(user.email),
    })
  } 

  sendFormData(){
    this.gaService.gtag('event', "formulario_cadastro", { 
      "nome": this.userForm.value.nome,
      "email":this.userForm.value.email
    })
  }

  sendEvent(event:string, category:string){
    this.gaService.event(event, category);
  }
  
}
