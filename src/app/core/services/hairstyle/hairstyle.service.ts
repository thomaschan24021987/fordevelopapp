import { Injectable } from '@angular/core';
import { Hairstyle } from '../../models/hairstyle.model';
import { HAIRSTYLES } from '../../constants/hairstyles';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HairstyleService {
    private hairstylesSubject = new BehaviorSubject<Hairstyle[]>([]);
    hairstyles$ = this.hairstylesSubject.asObservable();

    constructor() {
        this.loadHairstyles();
    }

    private loadHairstyles(): void {
        // In a real app, this might be an API call
        this.hairstylesSubject.next(HAIRSTYLES);
    }

    getHairstyleById(id: number): Hairstyle | undefined {
        return HAIRSTYLES.find(style => style.id === id);
    }
}