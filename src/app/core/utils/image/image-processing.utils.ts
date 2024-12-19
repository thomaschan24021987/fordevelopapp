import { ImageSource } from '@nativescript/core';
import { APP_CONFIG } from '../../constants/config';

export class ImageProcessingUtils {
    static async resizeImage(image: ImageSource, maxSize: number = APP_CONFIG.maxImageSize): Promise<ImageSource> {
        const aspectRatio = image.width / image.height;
        let newWidth = image.width;
        let newHeight = image.height;

        if (newWidth > maxSize) {
            newWidth = maxSize;
            newHeight = newWidth / aspectRatio;
        }

        if (newHeight > maxSize) {
            newHeight = maxSize;
            newWidth = newHeight * aspectRatio;
        }

        return await ImageSource.fromAsset(image.android || image.ios);
    }

    static async compressImage(image: ImageSource, quality: number = APP_CONFIG.maxImageQuality): Promise<ImageSource> {
        return await ImageSource.fromAsset(image.android || image.ios);
    }

    static async optimizeImageForProcessing(image: ImageSource): Promise<ImageSource> {
        const resized = await this.resizeImage(image);
        return await this.compressImage(resized);
    }
}