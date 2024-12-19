import { alert, confirm } from '@nativescript/core/ui/dialogs';

export class DialogHelper {
    static async showError(title: string, message: string): Promise<void> {
        await alert({
            title,
            message,
            okButtonText: 'OK'
        });
    }

    static async showConfirmation(title: string, message: string): Promise<boolean> {
        return await confirm({
            title,
            message,
            okButtonText: 'Yes',
            cancelButtonText: 'No'
        });
    }
}