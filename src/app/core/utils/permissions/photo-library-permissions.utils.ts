import * as permissions from 'nativescript-permissions';
import { DialogHelper } from '../dialog.utils';

export class PhotoLibraryPermissionsUtils {
    static async requestPhotoLibraryPermission(): Promise<boolean> {
        try {
            const hasPermission = await permissions.requestPermission(
                android.Manifest.permission.READ_EXTERNAL_STORAGE,
                'Photo library access is required to select photos.'
            );

            if (!hasPermission) {
                await DialogHelper.showError(
                    'Permission Required',
                    'Photo library permission is required to select photos.'
                );
            }

            return hasPermission;
        } catch (error) {
            console.error('Error requesting photo library permission:', error);
            return false;
        }
    }
}