import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

import { PlatformDetectorService } from '../../core/platform/platform-detector.service';

@Component({
   
    templateUrl: './signin.component.html',

})
export class SignInComponent implements OnInit {

    loginForm : FormGroup;
    @ViewChild('userNameInput') userNameInput : ElementRef<HTMLInputElement>
    
    constructor(private formBuilder : FormBuilder, 
        private authService : AuthService,
        private router : Router,
        private platformDetectorService : PlatformDetectorService) { }

    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            userName:['', Validators.required],
            password:['', Validators.required]
            
        })        
     }
     
     login(){

        const userName = this.loginForm.get('userName').value
        const password = this.loginForm.get('password').value
 
        this.authService.authenticate(userName, password)
        .subscribe(()=> {
            this.router.navigate(['user',userName])
        this.loginForm.reset()
        console.log("autenticado")},
        (err)=>{  
            this.loginForm.reset()
            this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();  
            
        console.log(err.message);
        })

    }

    teste(){
  
        console.log("teste")
    }
     
}
