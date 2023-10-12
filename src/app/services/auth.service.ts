import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { ILoginResponse } from '../interfaces/loginResponse.interface';
import { IUserBody } from '../models/userRegister.model';
import { ILoginBody } from '../interfaces/loginBody.interface';
import { ILoggedInterface } from '../interfaces/logged.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:3000/api/sensors';
  constructor(private http: HttpClient) {}

  registerUser(user: IUserBody): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      `${this.API_URL}/auth/register`,
      user
    );
  }

  loginUser(user: ILoginBody): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${this.API_URL}/auth/login`, user);
  }

  checkAuth(): Observable<ILoggedInterface> {
    return this.http.get<ILoggedInterface>(`${this.API_URL}/auth/check`);
  }
}
