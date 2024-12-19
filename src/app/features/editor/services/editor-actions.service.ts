import { Injectable } from '@angular/core';
import { ImageSource } from '@nativescript/core';
import { PhotoCaptureService, PhotoPickerService, PhotoStorageService } from '../../../core/services/photo';
import { SharingService } from '../../../core/services';
import { EditorStateService } from './editor-state.service';
import { ErrorUtils } from '../../../core/utils';

@Injectable({
    providedIn: 'root'
})
export class EditorActionsService {
    constructor(
        private photoCapture: PhotoCaptureService,
        private photoPicker: PhotoPickerService,
        private photoStorage: PhotoStorageService,
        private sharing: SharingService,
        private editorState: EditorStateService
    ) {}

    async takePhoto(): Promise<void> {
        try {
            const image = await this.photoCapture.takePhoto();
            if (image) {
                this.editorState.updateCurrentImage(image);
            }
        } catch (error) {
            await ErrorUtils.handleError(error, 'Taking photo');
        }
    }

    async pickPhoto(): Promise<void> {
        try {
            const image = await this.photoPicker.pickPhoto();
            if (image) {
                this.editorState.updateCurrentImage(image);
            }
        } catch (error) {
            await ErrorUtils.handleError(error, 'Picking photo');
        }
    }

    async savePhoto(): Promise<void> {
        const currentImage = await this.editorState.currentImage$.toPromise();
        if (currentImage) {
            try {
                await this.photoStorage.savePhoto(currentImage);
            } catch (error) {
                await ErrorUtils.handleError(error, 'Saving photo');
            }
        }
    }

    async sharePhoto(): Promise<void> {
        const currentImage = await this.editorState.currentImage$.toPromise();
        if (currentImage) {
            try {
                await this.sharing.sharePhoto(currentImage);
            } catch (error) {
                await ErrorUtils.handleError(error, 'Sharing photo');
            }
        }
    }
}