import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getEmployees(){
    return this.http.get('https://gorest.co.in/public/v2/users');
  }


  getUsersList(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUser(id: number){
    return this.http.get('https://reqres.in/api/users/'+id);
  }
}
