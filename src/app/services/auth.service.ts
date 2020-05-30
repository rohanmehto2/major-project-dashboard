import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restService: RestService) { }

  async login(credentials: any): Promise<boolean> {
    const tokens = await this.restService.httpPost('/login', credentials);
    if (tokens == null) { return false; }

    localStorage.setItem('refreshToken', tokens.refreshToken);
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('isLoggedin', 'true');
    return true;
  }

  async logout(): Promise<void> {
    const refreshToken = localStorage.getItem('refreshToken');
    await this.restService.httpPost('/logout', { refreshToken });
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLoggedin');
  }
}
