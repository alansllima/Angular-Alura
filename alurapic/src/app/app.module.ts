import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module'
import { ErrorsModule } from './errors/errors.module'
import { HomeModule } from './home/home.module';
import { VMessageModule } from './shared/components/vmessage/vmessage.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    VMessageModule,
    CoreModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
