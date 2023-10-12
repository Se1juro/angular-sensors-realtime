import { Action } from '@ngrx/store';

export interface SignUpAction extends Action {
  fullName: string;
  password: string;
  userName: string;
}
