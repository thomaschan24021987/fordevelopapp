import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import { ImageSource } from '@nativescript/core';

@Injectable({
    providedIn: 'root'
})
export class FaceDetectionService {
    private model: any;

    async initialize() {
        this.model = await faceLandmarksDetection.load(
            faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
        );
    }

    async detectFaceLandmarks(image: ImageSource) {
        if (!this.model) await this.initialize();
        
        const predictions = await this.model.estimateFaces({
            input: image
        });
        
        return predictions[0]?.landmarks || null;
    }
}