import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { ProductEditorComponent } from './productEditor.component';
import { ProductTableComponent } from './productTable.component';
import { OrderTableComponent } from './orderTable.component';

let routings = RouterModule.forChild([
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'main',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'products/:mode/:id',
                component: ProductEditorComponent
            },
            {
                path: 'products/:mode',
                component: ProductEditorComponent
            },
            {
                path: 'products',
                component: ProductTableComponent
            },
            {
                path: 'orders',
                component: OrderTableComponent
            },
            {
                path: '**',
                redirectTo: 'products'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
]);

@NgModule({
    imports: [FormsModule, CommonModule, routings],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent, ProductEditorComponent, ProductTableComponent, OrderTableComponent]
})

export class AdminModule { }