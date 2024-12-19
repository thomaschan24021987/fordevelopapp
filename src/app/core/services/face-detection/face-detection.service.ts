import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import { ImageSource } from '@nativescript/core';
import { FaceLandmarks } from '../../models/face-landmarks.model';

@Injectable({
    providedIn: 'root'
})
export class FaceDetectionService {
    private model: any;

    async initialize() {
        if (!this.model) {
            this.model = await faceLandmarksDetection.load(
                faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
            );
        }
    }

    async detectFaceLandmarks(image: ImageSource): Promise<FaceLandmarks | null> {
        try {
            await this.initialize();
            const predictions = await this.model.estimateFaces({
                input: image
            });
            return predictions[0]?.landmarks || null;
        } catch (error) {
            console.error('Face detection error:', error);
            return null;
        }
    }

    async isFaceDetected(image: ImageSource): Promise<boolean> {
        const landmarks = await this.detectFaceLandmarks(image);
        return landmarks !== null;
    }
}