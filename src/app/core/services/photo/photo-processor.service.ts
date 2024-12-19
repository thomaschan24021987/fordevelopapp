import { Injectable } from '@angular/core';
import { ImageSource } from '@nativescript/core';
import { FaceDetectionService } from '../face-detection/face-detection.service';
import { ImageProcessingService } from '../image/image-processing.service';
import { HairColor, Hairstyle } from '../../models';
import { ImageProcessingUtils, ImageValidationUtils } from '../../utils/image';
import { ErrorUtils } from '../../utils';

@Injectable({
    providedIn: 'root'
})
export class PhotoProcessorService {
    constructor(
        private faceDetection: FaceDetectionService,
        private imageProcessing: ImageProcessingService
    ) {}

    async processPhoto(
        image: ImageSource,
        fileName: string,
        hairstyle: Hairstyle,
        color: HairColor,
        size: number,
        brightness: number
    ): Promise<ImageSource | null> {
        try {
            // Validate image
            const validationErrors = ImageValidationUtils.getImageValidationErrors(image, fileName);
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join('\n'));
            }

            // Optimize image
            const optimizedImage = await ImageProcessingUtils.optimizeImageForProcessing(image);

            // Detect face
            const faceLandmarks = await this.faceDetection.detectFaceLandmarks(optimizedImage);
            if (!faceLandmarks) {
                throw new Error('No face detected in the image');
            }

            // Apply hairstyle and effects
            let processedImage = optimizedImage;
            
            processedImage = await this.imageProcessing.overlayHairstyle(
                processedImage,
                hairstyle.overlayImage,
                faceLandmarks,
                size
            );

            processedImage = await this.imageProcessing.changeHairColor(
                processedImage,
                color.value
            );

            processedImage = await this.imageProcessing.adjustBrightness(
                processedImage,
                brightness
            );

            return processedImage;
        } catch (error) {
            await ErrorUtils.handleError(error, 'Processing photo');
            return null;
        }
    }
}