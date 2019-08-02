

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth/auth.service';
import {LowerCaseValidator} from '../../shared/validators/lower-case.validators';


@Component({
    selector: 'ap-signup',
    templateUrl: './signup.component.html'

})
export class SignUpComponent implements OnInit {

    signupForm: FormGroup


    constructor(private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router) { }

        


    ngOnInit(): void {

        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
               
             ] 
            ],
                fullName: ['',
                    [
                        Validators.required,
                        Validators.minLength(2),
                        Validators.maxLength(40)
                    ]
                ],
                userName: ['',
                    [
                        Validators.required,
                        LowerCaseValidator,
                        Validators.minLength(2),
                        Validators.maxLength(30)
                    ]
                ],
                password: ['',
                 [
                     Validators.required,
                      Validators.minLength(2),
                       Validators.maxLength(30)
                    ]
                ]

        })

    }
    signUp() {
        


    }
}
