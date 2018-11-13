import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from './nav.bar.component';
import {AppRoutingModule} from './app.routing.module';
import {HomeComponent} from './home.component';
import {PaymentsComponent} from './payments.component';
import {FaqComponent} from './faq.component';
import {SupportComponent} from './support.component';
import {LoginModalComponent} from './button.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PaymentsComponent,
    FaqComponent,
    SupportComponent,
    LoginModalComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
