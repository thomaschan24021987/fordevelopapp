import { Camera } from '@nativescript/camera';
import { DialogHelper } from '../dialog.utils';

export class CameraPermissionsUtils {
    static async requestCameraPermission(): Promise<boolean> {
        try {
            const camera = new Camera();
            const isAvailable = await camera.isAvailable();
            
            if (!isAvailable) {
                await DialogHelper.showError(
                    'Camera Unavailable',
                    'Your device does not have a camera or it is not available.'
                );
                return false;
            }

            const hasPermission = await camera.requestPermissions();
            
            if (!hasPermission) {
                await DialogHelper.showError(
                    'Permission Required',
                    'Camera permission is required to take photos.'
                );
            }

            return hasPermission;
        } catch (error) {
            console.error('Error requesting camera permission:', error);
            return false;
        }
    }
}