import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

interface IUser {
    id: string,
    name: string,
    email: string,
    active: boolean,
    role: { id: string, name: string }
}

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnChanges {

    @Input() canOpen?: boolean;
    @Input() user?: IUser;
    @Output() close: EventEmitter<void> = new EventEmitter()

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
    }

    handleClose() {
        this.close.emit();
    }

}
