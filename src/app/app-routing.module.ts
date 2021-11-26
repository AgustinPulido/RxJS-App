import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  {
    // Ejemplos de observables para afterclass
    path: "observables",
    component: ObservablesComponent,
  },
  {
    // AppComponent / ejemplos varios
    path: "home",
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
