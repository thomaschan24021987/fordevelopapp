import { alert, confirm } from '@nativescript/core/ui/dialogs';

export class DialogHelper {
    static async showError(title: string, message: string): Promise<void> {
        await alert({
            title,
            message,
            okButtonText: 'OK'
        });
    }

    static async showConfirmation(
        title: string, 
        message: string, 
        okButtonText: string = 'Yes',
        cancelButtonText: string = 'No'
    ): Promise<boolean> {
        return await confirm({
            title,
            message,
            okButtonText,
            cancelButtonText
        });
    }

    static async showSuccess(message: string): Promise<void> {
        await alert({
            title: 'Success',
            message,
            okButtonText: 'OK'
        });
    }
}