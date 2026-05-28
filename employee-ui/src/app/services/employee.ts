import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://localhost:5021/api/employee';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.apiUrl);
  }

  addEmployee(employee: any) {
    return this.http.post(this.apiUrl, employee);
  }
}