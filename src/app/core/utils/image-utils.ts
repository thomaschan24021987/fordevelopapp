import { ImageSource } from "@nativescript/core";

export class ImageUtils {
    static async resizeImage(image: ImageSource, maxWidth: number, maxHeight: number): Promise<ImageSource> {
        const aspectRatio = image.width / image.height;
        let newWidth = image.width;
        let newHeight = image.height;

        if (newWidth > maxWidth) {
            newWidth = maxWidth;
            newHeight = newWidth / aspectRatio;
        }

        if (newHeight > maxHeight) {
            newHeight = maxHeight;
            newWidth = newHeight * aspectRatio;
        }

        return await ImageSource.fromAsset(image.android || image.ios);
    }

    static async compressImage(image: ImageSource, quality: number = 0.8): Promise<ImageSource> {
        return await ImageSource.fromAsset(image.android || image.ios);
    }
}