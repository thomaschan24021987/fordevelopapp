import { Injectable } from '@angular/core';
import { ImageSource } from '@nativescript/core';
import { FaceDetectionService } from '../face-detection/face-detection.service';
import { ImageProcessingService } from '../image/image-processing.service';
import { HairstyleOverlay } from '../../models/hairstyle.model';

@Injectable({
    providedIn: 'root'
})
export class HairstyleProcessorService {
    constructor(
        private faceDetection: FaceDetectionService,
        private imageProcessing: ImageProcessingService
    ) {}

    async applyHairstyle(
        image: ImageSource,
        hairstyle: HairstyleOverlay,
        color: string,
        size: number,
        brightness: number
    ): Promise<ImageSource> {
        try {
            const faceLandmarks = await this.faceDetection.detectFaceLandmarks(image);
            if (!faceLandmarks) {
                throw new Error('No face detected in the image');
            }

            let processedImage = image;
            
            // Apply hairstyle overlay
            processedImage = await this.imageProcessing.overlayHairstyle(
                processedImage,
                hairstyle,
                faceLandmarks,
                size
            );

            // Apply color
            processedImage = await this.imageProcessing.changeHairColor(
                processedImage,
                color
            );

            // Adjust brightness
            processedImage = await this.imageProcessing.adjustBrightness(
                processedImage,
                brightness
            );

            return processedImage;
        } catch (error) {
            console.error('Error applying hairstyle:', error);
            throw error;
        }
    }
}