import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageSource } from '@nativescript/core';
import { Hairstyle, HairColor } from '../../../core/models';

@Injectable({
    providedIn: 'root'
})
export class EditorStateService {
    private currentImageSubject = new BehaviorSubject<ImageSource | null>(null);
    private selectedHairstyleSubject = new BehaviorSubject<Hairstyle | null>(null);
    private selectedColorSubject = new BehaviorSubject<HairColor | null>(null);
    private brightnessSubject = new BehaviorSubject<number>(100);
    private hairSizeSubject = new BehaviorSubject<number>(100);

    currentImage$: Observable<ImageSource | null> = this.currentImageSubject.asObservable();
    selectedHairstyle$: Observable<Hairstyle | null> = this.selectedHairstyleSubject.asObservable();
    selectedColor$: Observable<HairColor | null> = this.selectedColorSubject.asObservable();
    brightness$: Observable<number> = this.brightnessSubject.asObservable();
    hairSize$: Observable<number> = this.hairSizeSubject.asObservable();

    updateCurrentImage(image: ImageSource | null): void {
        this.currentImageSubject.next(image);
    }

    updateSelectedHairstyle(hairstyle: Hairstyle | null): void {
        this.selectedHairstyleSubject.next(hairstyle);
    }

    updateSelectedColor(color: HairColor | null): void {
        this.selectedColorSubject.next(color);
    }

    updateBrightness(value: number): void {
        this.brightnessSubject.next(value);
    }

    updateHairSize(value: number): void {
        this.hairSizeSubject.next(value);
    }
}