import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-image-controls",
    templateUrl: "./image-controls.component.html",
    styleUrls: ["./image-controls.component.scss"]
})
export class ImageControlsComponent {
    @Input() brightness: number = 100;
    @Input() size: number = 100;
    @Output() brightnessChange = new EventEmitter<number>();
    @Output() sizeChange = new EventEmitter<number>();

    onBrightnessChange(value: number): void {
        this.brightnessChange.emit(value);
    }

    onSizeChange(value: number): void {
        this.sizeChange.emit(value);
    }
}