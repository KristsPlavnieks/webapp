import {Component, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  template: `
    <ng-template #mansModālis>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">User</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form autocomplete="off">
          <div class="form-group">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="login" [(ngModel)]="username">
              <div class="input-group">
                <input type="password" class="form-control" placeholder="password" [(ngModel)]="psssword">
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="onLogin()">Login</button>
      </div>
    </ng-template>
    <!--[ngModelOptions]="{standalone: true}"-->
  `
})
export class LoginModalComponent {
  constructor(private modalService: NgbModal) {}
  @ViewChild("mansModālis") modal;
  public username: string = '';
  public psssword: string = '';

  public open() {
    this.modalService.open(this.modal);
  }

  onLogin() {
    console.log(this.username);
    console.log(this.psssword);
  }
}

