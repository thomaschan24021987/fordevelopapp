export class AnalyticsUtils {
    static logEvent(eventName: string, params?: Record<string, any>): void {
        // Implementation for analytics logging
        console.log(`Analytics Event: ${eventName}`, params);
    }

    static logError(error: Error, context: string): void {
        // Implementation for error logging
        console.error(`Error in ${context}:`, error);
    }
}