import { DialogHelper } from './dialog.utils';

export class ErrorUtils {
    static async handleError(error: Error, context: string): Promise<void> {
        console.error(`Error in ${context}:`, error);
        await DialogHelper.showError('An error occurred', error.message);
    }

    static isNetworkError(error: any): boolean {
        return error.message?.includes('network') || 
               error.message?.includes('connection') ||
               error.code === 'NETWORK_ERROR';
    }

    static isPermissionError(error: any): boolean {
        return error.message?.includes('permission') || 
               error.code === 'PERMISSION_DENIED';
    }
}