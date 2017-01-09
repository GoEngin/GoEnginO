import { Component, Input, Output, EventEmitter, ElementRef, Inject, ViewChild } from '@angular/core';
import { SharedService } from '../../shared.service'; 
import { BaseComponent } from '../base.component';

//TODO: Does this create too much instances that can be caused the poor performance or wasting memory? 
// -> Material2 Also use list-item component.
@Component({
    selector: 'mc-listitem',
    moduleId: module.id,
    styleUrls: ['listitem.component.css'],
    templateUrl: 'listitem.component.html',
    host: {
        '[attr.data-id]': 'item[idField]',
        '[class.listitem__tile]': 'isTile',
        '[class.editable]': 'editable',
        '[class.edit-mode]': '_edit'
    }
})

export class ListItemComponent extends BaseComponent {

    private _edit: boolean = false;

    @Input() cls: string;
    @Input() item: any;
    @Input() columns: any[];
    @Input() idField: string = 'id';
    @Input() hasDetail: boolean;
    @Input() hasTable: boolean;
    @Input() isTile: boolean = false;
    @Input() editable: boolean = false;

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }

    toggleEditMode() {
        this._edit = !this._edit;
    }

}