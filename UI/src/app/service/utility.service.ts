import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  dateFormate(date:Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  getFormValuesAsJSON(formData:any):any {
    const formValues: any = {};
    Object.keys(formData.controls).forEach(controlName => {
      const control = formData.get(controlName);
      if (control) {
        formValues[controlName] = control.value;
      }
    });
    return formValues;
  }
  employeeFormValidation():EmployeeForm{
    const formData:EmployeeForm={
      firstName:'',
      lastName:'',
      dob:'',
      gender:'',
      phnNumber:'',
      email:'',
      hireDate:'',
      jobTitle:'',
      departmentId:'',
      addressId:'',
      salary:'',
      managerId:'',
      empStatus:'',
      emergencyContactName:'',
      emergencyContactRelationship:'',
      emergencyContactPhoneNumber:'',
      imageFile:''
    };
    return formData;
  }
}import { EmployeeForm } from './FormInterface/employee-form';

