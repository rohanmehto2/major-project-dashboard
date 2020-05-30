import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as axios from 'axios';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  baseApi = 'https://major-project-dev.herokuapp.com';

  async httpGet(url: string, path: string = '', args: any = {}): Promise<any> {
    try {
      const accessToken = localStorage.getItem('accessToken');
      args.headers = {
        'Authorization': `Bearer ${accessToken}`
      };
      url = `${this.baseApi}${url}/${path}`;
      const res = await axios.default.get(url, args);
      return res.data;
    } catch (err) {
      return null;
    }
  }

  get(url: string, path: string = '', args: any = {}) {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${accessToken}`
        })
      };

      url = `${this.baseApi}${url}/${path}`;
      const res = this.http.get(url, httpOptions);
      return res;
    } catch (err) {
      return null;
    }
  }

  async httpPost(url: string, data: object, args: any = {}): Promise<any> {
    try {
      const accessToken = localStorage.getItem('accessToken');
      args.headers = {
        'Authorization': `Bearer ${accessToken}`
      };
      url = `${this.baseApi}${url}`;
      const res = await axios.default.post(url, data, args);
      return res.data;
    } catch (err) {
      return null;
    }
  }

  async httpPut(url: string, path: string = '', data: object, args: any = {}): Promise<any> {
    try {
      const accessToken = localStorage.getItem('accessToken');
      args.headers = {
        'Authorization': `Bearer ${accessToken}`
      };
      url = `${this.baseApi}${url}/${path}`;
      const res = await axios.default.put(url, data, args);
      return res.data;
    } catch (err) {
      return null;
    }
  }
}
