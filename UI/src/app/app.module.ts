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
import { DepartmentComponent } from './components/department/department.component';
import { ManagerComponent } from './components/manager/manager.component';
import { EmployeeService } from './service/employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        EmployeeComponent,
        DepartmentComponent,
        ManagerComponent,
        AddEmployeeComponent,
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
        MatSelectModule
    ]
})
export class AppModule { }
