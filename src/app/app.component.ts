import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private gaService: GoogleAnalyticsService
  ){}
  title = 'analytics_poc';

  onClick2(){
    
    this.gaService.event("button_click")
    console.log('Click1')
  }
  onClick1(){
    this.gaService.gtag('event', "formulario_cadastro", { 
      "nome": "Teste",
      "email":"teste@teste.com"
    })
  }
}
