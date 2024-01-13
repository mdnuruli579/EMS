import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        EmployeeComponent,
        DepartmentComponent,
        ManagerComponent,
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
        HttpClientModule
    ]
})
export class AppModule { }
