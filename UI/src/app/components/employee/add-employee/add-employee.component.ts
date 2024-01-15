import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  // employeeForm: FormGroup | undefined;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit(): void {
  //   this.initForm();
  // }

  // initForm(): void {
  //   this.employeeForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     dob: ['', Validators.required],
  //     gender: ['', Validators.required],
  //     phnNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     hireDate: ['', Validators.required],
  //     jobTitle: ['', Validators.required],
  //     departmentId: [null, Validators.required],
  //     addressId: [null, Validators.required],
  //     salary: [null, Validators.required],
  //     managerId: [null, Validators.required],
  //     empStatus: ['', Validators.required],
  //     emergencyContactName: ['', Validators.required],
  //     emergencyContactRelationship: ['', Validators.required],
  //     emergencyContactPhoneNumber: [
  //       '',
  //       [Validators.required, Validators.pattern(/^\d{10}$/)],
  //     ],
  //     photoURL: [''],
  //     createTime: [''],
  //   });
  // }

  // onSubmit(): void {
  //   if (this.employeeForm.valid) {
  //     // Add logic to save employee details
  //     console.log(this.employeeForm.value);
  //   } else {
  //     // Handle form validation errors
  //     console.log('Form is invalid');
  //   }
  // }

}
