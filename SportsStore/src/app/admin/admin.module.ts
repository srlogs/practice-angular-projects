import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';

let routings = RouterModule.forChild([
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'main',
        component: AdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
]);

@NgModule({
    imports: [FormsModule, CommonModule, routings],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent]
})

export class AdminModule { }