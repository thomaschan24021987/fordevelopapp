import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA] // Add this to handle custom elements
})
export class AppModule { }