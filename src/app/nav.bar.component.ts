import {Component, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  styles: [``],
  template: `
    <div class="row align-content-center"><span>Emīla fucking lapa</span></div>
    <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
      <a class="navbar-brand" routerLink="home">Home</a>

      <div class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" routerLink="home">My coaching</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="payments">Online materials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="faq">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="support">Support</a>
          </li>
        </ul>
        <button type="button" (click)="onOpenLogin()">Click Me!</button>
      </div>
    </nav>
     <app-login-modal #loginModal></app-login-modal>
  `
})
export class NavBarComponent {

  @ViewChild("loginModal") modal;
  onOpenLogin() {
   this.modal.open();
  }
}
