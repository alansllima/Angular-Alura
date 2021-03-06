import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver'
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import{ NotFoundComponent} from '../app/errors/not-found/not-found.component'
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import {SignUpComponent} from './home/signup/signup.component';

const routes: Routes = [
    { path: '', 
    component: SignInComponent,
    canActivate: [ AuthGuard ]
    },
    { path: 'signup', 
    component: SignUpComponent,
   
    },

    { path: 'user/:userName', component: PhotoListComponent,
     resolve:{
         photos: PhotoListResolver
    } },
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

 }