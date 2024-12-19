import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
    @Input() hasImage: boolean = false;
    @Output() save = new EventEmitter<void>();
    @Output() share = new EventEmitter<void>();
}