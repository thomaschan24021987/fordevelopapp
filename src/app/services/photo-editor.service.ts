import { Injectable } from "@angular/core";
import { ImageSource, knownFolders, path } from "@nativescript/core";
import { Camera } from "@nativescript/camera";
import * as imagepicker from "@nativescript/imagepicker";

@Injectable({
    providedIn: 'root'
})
export class PhotoEditorService {
    private camera: Camera;

    constructor() {
        this.camera = new Camera();
    }

    async takePhoto(): Promise<ImageSource> {
        const options = {
            width: 1024,
            height: 1024,
            keepAspectRatio: true,
            saveToGallery: false
        };

        try {
            const imageAsset = await this.camera.takePicture(options);
            return await ImageSource.fromAsset(imageAsset);
        } catch (error) {
            console.error('Error taking photo:', error);
            return null;
        }
    }

    async pickPhoto(): Promise<ImageSource> {
        const context = imagepicker.create({
            mode: "single"
        });

        try {
            const selection = await context.authorize();
            const imageAsset = await selection.present();
            return await ImageSource.fromAsset(imageAsset[0]);
        } catch (error) {
            console.error('Error picking photo:', error);
            return null;
        }
    }

    async applyHairstyle(
        image: ImageSource,
        hairstyleIndex: number,
        color: string,
        size: number,
        brightness: number
    ): Promise<ImageSource> {
        // Implementation for applying hairstyle using ML model
        // This would involve face detection and hairstyle overlay
        return image;
    }

    async savePhoto(image: ImageSource): Promise<void> {
        const fileName = `Hairstyle_${Date.now()}.jpg`;
        const folderPath = knownFolders.documents().path;
        const filePath = path.join(folderPath, fileName);
        
        await image.saveToFile(filePath, "jpg");
    }
}