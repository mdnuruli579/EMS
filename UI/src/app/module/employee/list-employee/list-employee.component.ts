import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { EmployeeService } from '../../../service/employee/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
