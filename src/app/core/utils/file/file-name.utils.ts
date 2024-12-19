import { APP_CONFIG } from '../../constants/config';

export class FileNameUtils {
    static getUniqueFileName(baseName: string, extension: string): string {
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 8);
        return `${baseName}_${timestamp}_${randomString}.${extension}`;
    }

    static isValidImageFormat(fileName: string): boolean {
        return APP_CONFIG.supportedImageFormats.some(format => 
            fileName.toLowerCase().endsWith(format)
        );
    }

    static getFileExtension(fileName: string): string {
        return fileName.slice(fileName.lastIndexOf('.'));
    }
}