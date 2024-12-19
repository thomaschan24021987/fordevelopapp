import { Injectable } from '@angular/core';
import { HairColor, DEFAULT_HAIR_COLORS } from '../../models/hair-color.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HairColorService {
    private colorsSubject = new BehaviorSubject<HairColor[]>(DEFAULT_HAIR_COLORS);
    colors$ = this.colorsSubject.asObservable();

    getColorById(id: string): HairColor | undefined {
        return DEFAULT_HAIR_COLORS.find(color => color.id === id);
    }

    getDefaultColor(): HairColor {
        return DEFAULT_HAIR_COLORS[0];
    }
}