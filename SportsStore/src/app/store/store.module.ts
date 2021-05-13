import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';

@NgModule({
    imports: [ModelModule, FormsModule, BrowserModule],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})

export class StoreModule { }