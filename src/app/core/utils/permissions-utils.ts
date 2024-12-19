import { Camera } from "@nativescript/camera";
import * as permissions from "nativescript-permissions";

export class PermissionsUtils {
    static async requestCameraPermission(): Promise<boolean> {
        try {
            const granted = await permissions.requestPermission(
                android.Manifest.permission.CAMERA,
                "Need camera access to take photos"
            );
            return granted;
        } catch (error) {
            console.error('Error requesting camera permission:', error);
            return false;
        }
    }

    static async requestPhotoLibraryPermission(): Promise<boolean> {
        try {
            const granted = await permissions.requestPermission(
                android.Manifest.permission.READ_EXTERNAL_STORAGE,
                "Need storage access to select photos"
            );
            return granted;
        } catch (error) {
            console.error('Error requesting photo library permission:', error);
            return false;
        }
    }
}