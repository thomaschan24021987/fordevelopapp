import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageSource } from '@nativescript/core';
import { EditorStateService } from './services/editor-state.service';
import { EditorActionsService } from './services/editor-actions.service';
import { HairColorService } from '../../core/services/color/hair-color.service';
import { HairstyleService } from '../../core/services/hairstyle/hairstyle.service';
import { Hairstyle, HairColor } from '../../core/models';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
    currentImage$: Observable<ImageSource | null>;
    hairstyles$: Observable<Hairstyle[]>;
    hairColors$: Observable<HairColor[]>;
    selectedHairstyle$: Observable<Hairstyle | null>;
    selectedColor$: Observable<HairColor | null>;
    brightness$: Observable<number>;
    hairSize$: Observable<number>;

    constructor(
        private editorState: EditorStateService,
        private editorActions: EditorActionsService,
        private hairstyleService: HairstyleService,
        private hairColorService: HairColorService
    ) {
        this.currentImage$ = this.editorState.currentImage$;
        this.hairstyles$ = this.hairstyleService.hairstyles$;
        this.hairColors$ = this.hairColorService.colors$;
        this.selectedHairstyle$ = this.editorState.selectedHairstyle$;
        this.selectedColor$ = this.editorState.selectedColor$;
        this.brightness$ = this.editorState.brightness$;
        this.hairSize$ = this.editorState.hairSize$;
    }

    ngOnInit(): void {
        // Initialize with default color
        this.editorState.updateSelectedColor(this.hairColorService.getDefaultColor());
    }

    ngOnDestroy(): void {
        // Cleanup if needed
    }

    // Action handlers
    takePhoto(): Promise<void> {
        return this.editorActions.takePhoto();
    }

    pickPhoto(): Promise<void> {
        return this.editorActions.pickPhoto();
    }

    savePhoto(): Promise<void> {
        return this.editorActions.savePhoto();
    }

    sharePhoto(): Promise<void> {
        return this.editorActions.sharePhoto();
    }

    // State update handlers
    onHairstyleSelect(hairstyleId: number): void {
        const hairstyle = this.hairstyleService.getHairstyleById(hairstyleId);
        this.editorState.updateSelectedHairstyle(hairstyle || null);
    }

    onColorSelect(colorId: string): void {
        const color = this.hairColorService.getColorById(colorId);
        this.editorState.updateSelectedColor(color || this.hairColorService.getDefaultColor());
    }

    onBrightnessChange(value: number): void {
        this.editorState.updateBrightness(value);
    }

    onSizeChange(value: number): void {
        this.editorState.updateHairSize(value);
    }
}