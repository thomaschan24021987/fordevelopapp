import { Component, OnInit } from "@angular/core";
import { ImageSource } from "@nativescript/core";
import { PhotoEditorService } from "../services/photo-editor.service";
import { SharingService } from "../services/sharing.service";

@Component({
    selector: "app-editor",
    templateUrl: "./editor.component.html",
    styleUrls: ["./editor.component.scss"]
})
export class EditorComponent implements OnInit {
    currentImage: ImageSource;
    hairstyles = [];
    hairColors = ['Black', 'White', 'Red', 'Gold', 'Yellow', 'Brown', 'Grey', 'Blue', 'Green', 'Orange'];
    selectedHairstyle: number = 0;
    selectedColor: string = 'Black';
    brightness: number = 100;
    hairSize: number = 100;

    constructor(
        private photoEditor: PhotoEditorService,
        private sharing: SharingService
    ) {}

    ngOnInit() {
        this.loadHairstyles();
    }

    async takePhoto() {
        const image = await this.photoEditor.takePhoto();
        if (image) {
            this.currentImage = image;
        }
    }

    async pickPhoto() {
        const image = await this.photoEditor.pickPhoto();
        if (image) {
            this.currentImage = image;
        }
    }

    applyHairstyle(index: number) {
        this.selectedHairstyle = index;
        this.updatePhoto();
    }

    updatePhoto() {
        if (this.currentImage) {
            this.photoEditor.applyHairstyle(
                this.currentImage,
                this.selectedHairstyle,
                this.selectedColor,
                this.hairSize,
                this.brightness
            );
        }
    }

    async savePhoto() {
        await this.photoEditor.savePhoto(this.currentImage);
    }

    async sharePhoto() {
        await this.sharing.sharePhoto(this.currentImage);
    }
}