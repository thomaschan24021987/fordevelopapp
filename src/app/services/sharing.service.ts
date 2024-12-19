import { Injectable } from "@angular/core";
import { ImageSource } from "@nativescript/core";
import { SocialShare } from "@nativescript/social-share";

@Injectable({
    providedIn: 'root'
})
export class SharingService {
    async sharePhoto(image: ImageSource) {
        try {
            await SocialShare.shareImage(image);
        } catch (error) {
            console.error('Error sharing photo:', error);
        }
    }
}