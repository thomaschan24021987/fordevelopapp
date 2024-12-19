import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
    { path: '', redirectTo: '/editor', pathMatch: 'full' },
    { path: 'editor', loadChildren: () => import('./features/editor/editor.module').then(m => m.EditorModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }