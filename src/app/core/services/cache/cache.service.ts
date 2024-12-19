import { Injectable } from '@angular/core';
import { ImageSource, knownFolders, path } from '@nativescript/core';
import { FileUtils } from '../../utils/file.utils';
import { APP_CONFIG } from '../../constants/config';

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    private readonly CACHE_FOLDER = 'image_cache';

    constructor() {
        this.createCacheFolder();
    }

    private createCacheFolder(): void {
        const documents = knownFolders.documents();
        documents.getFolder(this.CACHE_FOLDER);
    }

    async cacheImage(image: ImageSource, key: string): Promise<string> {
        const fileName = FileUtils.getUniqueFileName(key, 'jpg');
        const folderPath = path.join(knownFolders.documents().path, this.CACHE_FOLDER);
        const filePath = path.join(folderPath, fileName);
        
        try {
            await image.saveToFile(filePath, 'jpg', APP_CONFIG.maxImageQuality);
            return filePath;
        } catch (error) {
            console.error('Error caching image:', error);
            throw error;
        }
    }

    async clearCache(): Promise<void> {
        const documents = knownFolders.documents();
        const cacheFolder = documents.getFolder(this.CACHE_FOLDER);
        await cacheFolder.clear();
    }
}