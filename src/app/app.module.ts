import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './app/main/main.component';
import { RouterModule } from '@angular/router';
import { InicioAppComponent } from './app/app/inicio-app/inicio-app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from 'src/api.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InicioAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
