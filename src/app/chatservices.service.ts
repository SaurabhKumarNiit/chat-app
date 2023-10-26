import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatservicesService {

  constructor(private http: HttpClient) {}

  data: any;

  baseurl = 'https://glad-rings-production.up.railway.app';
  

  getVedioRequestDatav(): Observable<any> {
    return this.http.get<any>(
      `${this.baseurl}/videoRequestData`
    );
  }

  readUser1Message(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/readMessage1`);
  }

  
  readUser2Message(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/readMessage2`);
  }


  sendUser1Message(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.baseurl}/sendMessage1`, data);
  }

  sendUser2Message(data: any) {
    console.log(data);
    return this.http.post<any>(`${this.baseurl}/sendMessage2`, data);
  }


// -----------------------------------------------------------------------

  getEmail() {
    return localStorage.getItem('email');
  }

  getSingleUser(): Observable<any> {
    this.data = this.getEmail();
    return this.http.get<any>(`${this.baseurl}/user/${this.data}`);
  }

  saveFeedbacks(formData:any) {
    console.log(formData);
    return this.http.post(`${this.baseurl}/feedback`, formData);
  }

  
  RemoveUser(email:string) {
    this.data = this.getEmail();
    return this.http.delete<any>(`${this.baseurl}/user/delete/${email}`);
  }
}
