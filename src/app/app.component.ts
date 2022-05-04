import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  acceptTerms: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private gaService: GoogleAnalyticsService
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      tel: [null, [Validators.required]],
    });
    this.secondFormGroup = this._formBuilder.group({
      cep: ['', Validators.required],
    });
  }
  

  onClick2() {

    this.gaService.event("button_click")
    console.log('Click1')
  }
  sendDataGA() {
    console.log( this.firstFormGroup.value)
    this.gaService.gtag('event', "formulario_cadastro", this.firstFormGroup.value)
  }
}
