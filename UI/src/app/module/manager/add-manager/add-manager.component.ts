import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ManagerService } from '../../../service/manager/manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrl: './add-manager.component.css',
  imports:[ReactiveFormsModule],
  standalone:true
})
export class AddManagerComponent {

  addMngrForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private managerService:ManagerService,
    private snackBar: MatSnackBar,
    private router: Router){}
  ngOnInit(): void {
    this.addMngrForm=this.fb.group({
      managerName:[''],
      phoneNumber:[''],
      email:['']
    })
  }
  onSubmit():void{
    if(this.addMngrForm.valid){
      this.managerService.addManager(this.addMngrForm.value).subscribe((res:any)=>{
        if(res.status==200){
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
          this.addMngrForm.reset();
          this.router.navigate(['manager']);
        }else{
          this.snackBar.open(res.msg, 'Cancel', {
            duration: 5000,
            panelClass: ['snackBarColor'],
          });
          
        }
      })
    }
  }
  onCancel():void{
    window.history.back();
  }
}