import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Hairstyle } from "~/app/core/models/hairstyle.model";

@Component({
    selector: "app-hairstyle-list",
    templateUrl: "./hairstyle-list.component.html",
    styleUrls: ["./hairstyle-list.component.scss"]
})
export class HairstyleListComponent {
    @Input() hairstyles: Hairstyle[] = [];
    @Input() selectedHairstyleId: number;
    @Output() hairstyleSelected = new EventEmitter<number>();

    onHairstyleSelect(hairstyleId: number): void {
        this.hairstyleSelected.emit(hairstyleId);
    }
}