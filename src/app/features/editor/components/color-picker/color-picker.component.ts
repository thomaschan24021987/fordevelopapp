import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HairColor } from "~/app/core/models/hair-color.model";

@Component({
    selector: "app-color-picker",
    templateUrl: "./color-picker.component.html",
    styleUrls: ["./color-picker.component.scss"]
})
export class ColorPickerComponent {
    @Input() colors: HairColor[] = [];
    @Input() selectedColor: string;
    @Output() colorSelected = new EventEmitter<string>();

    onColorSelect(color: string): void {
        this.colorSelected.emit(color);
    }
}