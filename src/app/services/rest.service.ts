import { Injectable } from '@angular/core';
import * as axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }

  baseApi = 'https://major-project-dev.herokuapp.com';

  // config = this.injector.get(ConfigService);
  // authService = this.injector.get(AuthService);

  async httpGet(url: string, path: string = '', args: any = {}): Promise<any> {
    try {
      // const baseApi = await this.config.getBaseApi();
      // const baseApi = "api.heroku";
      // const accessToken = await this.authService.getAccessToken();
      // args.headers = {
      //   'Authorization': `Bearer ${accessToken}`
      // };
      url = `${this.baseApi}${url}/${path}`;
      const res = await axios.default.get(url, args);
      return res.data;
    } catch (err) {
      return null;
    }
  }

  async httpPost(url: string, data: object, args: any = {}): Promise<any> {
    try {
      // const baseApi = await this.config.getBaseApi();
      // const baseApi = "api.heroku";
      // const accessToken = await this.authService.getAccessToken();
      // args.headers = {
      //   'Authorization': `Bearer ${accessToken}`
      // };
      url = `${this.baseApi}${url}`;
      const res = await axios.default.post(url, data, args);
      return res.data;
    } catch (err) {
      return null;
    }
  }

  async httpPut(url: string, path: string = '', data: object, args: any = {}): Promise<any> {
    try {
      // const baseApi = await this.config.getBaseApi();
      // const baseApi = "api.heroku";
      // const accessToken = await this.authService.getAccessToken();
      // args.headers = {
      //   'Authorization': `Bearer ${accessToken}`
      // };
      url = `${this.baseApi}${url}/${path}`;
      const res = await axios.default.put(url, data, args);
      return res.data;
    } catch (err) {
      return null;
    }
  }
}
