import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/state/actions/auth.action';
import { AppState } from 'src/app/state/stores';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<AppState>) {
    this.form = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.store.dispatch(login(this.form.value));
  }
}
