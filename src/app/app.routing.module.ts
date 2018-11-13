import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {PaymentsComponent} from './payments.component';
import {FaqComponent} from './faq.component';
import {SupportComponent} from './support.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'support', component: SupportComponent}
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
