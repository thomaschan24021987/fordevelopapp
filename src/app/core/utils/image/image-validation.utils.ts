import { ImageSource } from '@nativescript/core';
import { APP_CONFIG } from '../../constants/config';
import { FileNameUtils } from '../file/file-name.utils';

export class ImageValidationUtils {
    static isValidImageSize(image: ImageSource): boolean {
        return image.width <= APP_CONFIG.maxImageSize && 
               image.height <= APP_CONFIG.maxImageSize;
    }

    static validateImage(image: ImageSource, fileName: string): string[] {
        const errors: string[] = [];

        if (!FileNameUtils.isValidImageFormat(fileName)) {
            errors.push(`Unsupported image format. Supported formats: ${APP_CONFIG.supportedImageFormats.join(', ')}`);
        }

        if (!this.isValidImageSize(image)) {
            errors.push(`Image dimensions exceed maximum size of ${APP_CONFIG.maxImageSize}px`);
        }

        return errors;
    }
}