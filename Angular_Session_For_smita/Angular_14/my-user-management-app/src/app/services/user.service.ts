import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Injectable } from '@angular/core';


@Injectable() 
  export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/users';
  // Get All Users - with the help of getmethod of HttpClient inbuit service by calling the backend API (json server)
  getUsers(){
    return this.http.get<User[]>(this.baseUrl);
  }
}