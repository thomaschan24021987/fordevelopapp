import { Injectable } from '@angular/core';
import { AnalyticsUtils } from '../../utils/analytics.utils';

@Injectable({
    providedIn: 'root'
})
export class PerformanceService {
    private timers: Map<string, number> = new Map();

    startTimer(operation: string): void {
        this.timers.set(operation, Date.now());
    }

    endTimer(operation: string): void {
        const startTime = this.timers.get(operation);
        if (startTime) {
            const duration = Date.now() - startTime;
            this.timers.delete(operation);
            
            AnalyticsUtils.logEvent('operation_completed', {
                operation,
                duration_ms: duration
            });
        }
    }

    trackError(error: Error, context: string): void {
        AnalyticsUtils.logError(error, context);
    }
}