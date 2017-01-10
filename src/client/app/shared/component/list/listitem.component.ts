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
        '[class.listitem__tile]': 'isTile'
    }
})

export class ListItemComponent extends BaseComponent {

    @Input() item: any;
    @Input() columns: any[];
    @Input() idField: string = 'id';
    @Input() hasDetail: boolean;
    @Input() hasTable: boolean;
    @Input() isTile: boolean = false;
    @Input() editable: boolean = false;
    @Input() isSimpleEdit: boolean = false;

    @Input()
    set config(config: any) {
        if (config.item) {
            this.item = config.item;
        }
        if (config.idField) {
            this.idField = config.idField;
        }
        if (config.hasDetail) {
            this.hasDetail = config.hasDetail;
        }
        if (config.hasTable) {
            this.hasTable = config.hasTable;
        }
        if (config.isTile) {
            this.isTile = config.isTile;
        }
        if (config.editable) {
            this.editable = config.editable;
        }
        if (config.columns) {
            this.isSimpleEdit = config.isSimpleEdit;
        }
    }

    constructor(protected _el: ElementRef, protected _service: SharedService) { 
        super(_el, _service);
    }
}