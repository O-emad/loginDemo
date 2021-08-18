import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { ILoginFormData } from '../data/login-form-data';

@Component({
  selector: 'lg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }
  

  loginForm :ILoginFormData ={
    username : '',
    password : ''
  }
  postError : boolean = false;
  postErrorMessage : string = '';


  ngOnInit(): void {
  }

  onHttpError(errorResponse:any){
    console.log('error', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  onSubmit(form: NgForm):void{
    console.log('onSubmit',form.valid);
    if(form.valid){
      this.dataService.postLoginForm(this.loginForm).subscribe(
        {
          next: result => {
            console.log('success', result);
            this.router.navigate(['/welcome']);
          },
          error: error => this.onHttpError(error)
        }
      )
      }
      else{
        this.postError = true;
        this.postErrorMessage = 'fix the above errors !';
      }
  }

}
