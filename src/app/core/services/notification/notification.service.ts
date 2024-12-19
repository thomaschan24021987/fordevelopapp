import { Injectable } from '@angular/core';
import { LocalNotifications } from '@nativescript/local-notifications';
import { DialogHelper } from '../../utils/dialog.utils';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    async showSaveSuccess(): Promise<void> {
        await LocalNotifications.schedule([{
            id: 1,
            title: 'Photo Saved',
            body: 'Your hairstyle photo has been saved successfully!',
            badge: 1
        }]);
    }

    async showShareSuccess(): Promise<void> {
        await DialogHelper.showError(
            'Success',
            'Your hairstyle photo has been shared successfully!'
        );
    }

    async showProcessingError(error: string): Promise<void> {
        await DialogHelper.showError(
            'Processing Error',
            error || 'An error occurred while processing your photo.'
        );
    }
}