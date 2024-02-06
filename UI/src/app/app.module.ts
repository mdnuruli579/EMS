import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './components/department/department.component';
import { ManagerComponent } from './components/manager/manager.component';
import { EmployeeService } from './service/employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { ViewDepartmentComponent } from './components/department/view-department/view-department.component';
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { AddressComponent } from './components/address/address.component';
import { AddManagerComponent } from './components/manager/add-manager/add-manager.component';
import { ViewManagerComponent } from './components/manager/view-manager/view-manager.component';
import { EditManagerComponent } from './components/manager/edit-manager/edit-manager.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        EmployeeComponent,
        DepartmentComponent,
        ManagerComponent,
        AddEmployeeComponent,
        ViewEmployeeComponent,
        EditEmployeeComponent,
        AddDepartmentComponent,
        ViewDepartmentComponent,
        EditDepartmentComponent,
        AddressComponent,
        AddManagerComponent,
        ViewManagerComponent,
        EditManagerComponent,
        LoginComponent,
        CreateUserComponent,
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        HttpClientModule,
        MatInputModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule,
        MatGridListModule,
        MatCardModule,
        MatSnackBarModule,
        MatDialogModule,
        CommonModule,
        MatOptionModule,
        MatToolbarModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
