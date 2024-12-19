import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImageSource } from '@nativescript/core';

@Component({
    selector: 'app-photo-preview',
    templateUrl: './photo-preview.component.html',
    styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent {
    @Input() image: ImageSource | null = null;
    @Output() takePhoto = new EventEmitter<void>();
    @Output() pickPhoto = new EventEmitter<void>();
}