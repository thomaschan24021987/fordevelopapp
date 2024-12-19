import { Injectable } from '@angular/core';
import { Camera, ImageAsset } from '@nativescript/camera';
import { ImageSource } from '@nativescript/core';
import { CameraPermissionsUtils } from '../../utils/permissions/camera-permissions.utils';
import { ErrorUtils } from '../../utils/error.utils';
import { APP_CONFIG } from '../../constants/config';

@Injectable({
    providedIn: 'root'
})
export class PhotoCaptureService {
    private camera: Camera;

    constructor() {
        this.camera = new Camera();
    }

    async takePhoto(): Promise<ImageSource | null> {
        try {
            const hasPermission = await CameraPermissionsUtils.requestCameraPermission();
            if (!hasPermission) {
                return null;
            }

            const options = {
                width: APP_CONFIG.maxImageSize,
                height: APP_CONFIG.maxImageSize,
                keepAspectRatio: true,
                saveToGallery: false
            };

            const imageAsset = await this.camera.takePicture(options);
            return await ImageSource.fromAsset(imageAsset);
        } catch (error) {
            await ErrorUtils.handleError(error, 'Taking photo');
            return null;
        }
    }
}