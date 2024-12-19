import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { EditorStateService } from './services/editor-state.service';
import { EditorActionsService } from './services/editor-actions.service';
import { 
    ColorPickerComponent, 
    HairstyleListComponent, 
    ImageControlsComponent,
    PhotoPreviewComponent,
    ToolbarComponent
} from './components';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EditorRoutingModule
    ],
    declarations: [
        EditorComponent,
        ColorPickerComponent,
        HairstyleListComponent,
        ImageControlsComponent,
        PhotoPreviewComponent,
        ToolbarComponent
    ],
    providers: [
        EditorStateService,
        EditorActionsService
    ]
})
export class EditorModule { }