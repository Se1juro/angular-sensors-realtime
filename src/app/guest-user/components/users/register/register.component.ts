import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/state/actions/auth.action';
import { AppState } from 'src/app/state/stores';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<AppState>) {
    this.form = new FormGroup({
      fullName: new FormControl(),
      userName: new FormControl(),
      password: new FormControl(),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.store.dispatch(signUp(this.form.value));
  }
}
