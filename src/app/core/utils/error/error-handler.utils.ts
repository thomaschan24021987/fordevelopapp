import { DialogHelper } from '../dialog/dialog.utils';
import { ErrorLogger } from './error-logger.utils';

export class ErrorHandler {
    static async handle(error: Error, context: string): Promise<void> {
        ErrorLogger.logError(error, context);
        
        const message = this.getUserFriendlyMessage(error, context);
        await DialogHelper.showError('Error', message);
    }

    private static getUserFriendlyMessage(error: Error, context: string): string {
        if (this.isNetworkError(error)) {
            return 'Please check your internet connection and try again.';
        }
        
        if (this.isPermissionError(error)) {
            return `Permission required for ${context}. Please enable it in settings.`;
        }

        return error.message || `An error occurred while ${context}.`;
    }

    private static isNetworkError(error: any): boolean {
        return error.message?.includes('network') || 
               error.message?.includes('connection') ||
               error.code === 'NETWORK_ERROR';
    }

    private static isPermissionError(error: any): boolean {
        return error.message?.includes('permission') || 
               error.code === 'PERMISSION_DENIED';
    }
}