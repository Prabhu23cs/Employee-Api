import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html'
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];

  employee = {
    name: '',
    role: ''
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees()
      .subscribe((data: any) => {
        this.employees = data;
      });
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employee)
      .subscribe(() => {
        this.loadEmployees();

        this.employee = {
          name: '',
          role: ''
        };
      });
  }
}