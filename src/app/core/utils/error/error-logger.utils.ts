export class ErrorLogger {
    static logError(error: Error, context: string): void {
        console.error(`Error in ${context}:`, {
            message: error.message,
            stack: error.stack,
            context,
            timestamp: new Date().toISOString()
        });
    }

    static logWarning(message: string, context: string): void {
        console.warn(`Warning in ${context}:`, {
            message,
            context,
            timestamp: new Date().toISOString()
        });
    }
}