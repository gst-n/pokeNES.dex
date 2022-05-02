import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioAppComponent } from './app/app/inicio-app/inicio-app.component';
import { MainComponent } from './app/main/main.component';

const routes: Routes = [
{  path: '',
  component: MainComponent
},
{  path: 'inicio',
  component: InicioAppComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
