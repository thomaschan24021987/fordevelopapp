import { Injectable } from '@angular/core';
import { ImageSource, knownFolders, path } from '@nativescript/core';
import { FileUtils } from '../../utils/file.utils';
import { APP_CONFIG } from '../../constants/config';
import { ErrorUtils } from '../../utils/error.utils';

@Injectable({
    providedIn: 'root'
})
export class PhotoStorageService {
    private readonly IMAGES_FOLDER = APP_CONFIG.hairstylesFolderName;

    constructor() {
        this.createImagesFolder();
    }

    private createImagesFolder(): void {
        try {
            const documents = knownFolders.documents();
            documents.getFolder(this.IMAGES_FOLDER);
        } catch (error) {
            ErrorUtils.handleError(error, 'Creating images folder');
        }
    }

    async savePhoto(image: ImageSource): Promise<string> {
        try {
            const fileName = FileUtils.getUniqueFileName('hairstyle', 'jpg');
            const folderPath = path.join(knownFolders.documents().path, this.IMAGES_FOLDER);
            const filePath = path.join(folderPath, fileName);
            
            await image.saveToFile(filePath, 'jpg', APP_CONFIG.maxImageQuality);
            return filePath;
        } catch (error) {
            await ErrorUtils.handleError(error, 'Saving photo');
            throw error;
        }
    }

    async deletePhoto(filePath: string): Promise<void> {
        try {
            const file = knownFolders.documents().getFile(filePath);
            await file.remove();
        } catch (error) {
            await ErrorUtils.handleError(error, 'Deleting photo');
            throw error;
        }
    }

    async getAllPhotos(): Promise<string[]> {
        try {
            const folder = knownFolders.documents().getFolder(this.IMAGES_FOLDER);
            const entities = await folder.getEntities();
            return entities
                .filter(entity => !entity.isFolder)
                .map(file => file.path);
        } catch (error) {
            await ErrorUtils.handleError(error, 'Getting all photos');
            return [];
        }
    }
}