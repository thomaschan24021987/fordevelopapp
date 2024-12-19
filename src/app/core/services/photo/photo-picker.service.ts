import { Injectable } from '@angular/core';
import { ImageSource } from '@nativescript/core';
import * as imagepicker from '@nativescript/imagepicker';
import { PhotoLibraryPermissionsUtils } from '../../utils/permissions/photo-library-permissions.utils';
import { ErrorUtils } from '../../utils/error.utils';

@Injectable({
    providedIn: 'root'
})
export class PhotoPickerService {
    async pickPhoto(): Promise<ImageSource | null> {
        try {
            const hasPermission = await PhotoLibraryPermissionsUtils.requestPhotoLibraryPermission();
            if (!hasPermission) {
                return null;
            }

            const context = imagepicker.create({ mode: 'single' });
            const selection = await context.authorize();
            const selectedAssets = await selection.present();
            
            if (selectedAssets && selectedAssets.length > 0) {
                return await ImageSource.fromAsset(selectedAssets[0]);
            }
            
            return null;
        } catch (error) {
            await ErrorUtils.handleError(error, 'Picking photo');
            return null;
        }
    }
}